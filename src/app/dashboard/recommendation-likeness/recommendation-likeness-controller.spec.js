describe('RecommendationLikenessCtrl', function(){

  var $rootScope, GenderColors, AgeAnalysisApi, httpResponse, flashService;
  var apiLink = 'https://stagingapimcdonalds.sentimeter.io/api/recommendation_analysis?branch=&city=&date_from=&date_to=&region=';

  beforeEach(module('livefeed.dashboard.recommendation_likeness'));
  beforeEach(module('livefeed'));

  beforeEach(inject(function(_$rootScope_, $controller, _$httpBackend_, _flashService_) {

    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    flashService = _flashService_;
    window.ga = function(){};
    controller = $controller('RecommendationLikenessCtrl', { $scope: $rootScope });
    httpResponse = {
      success: true,
      response: {
        "feedback_count": 10,
        "feedbacks": [
          {
            "count": 1,
            "option__color_code": "#ac1a1a",
            "option__parent_id": null,
            "option__score": 0,
            "option__text": "2",
            "option_id": 92
          },
          {
            "count": 1,
            "option__color_code": "#01ad0f",
            "option__parent_id": null,
            "option__score": 0,
            "option__text": "7",
            "option_id": 97
          },
          {
            "count": 3,
            "option__color_code": "#e73a3a",
            "option__parent_id": null,
            "option__score": 0,
            "option__text": "4",
            "option_id": 94
          },
          {
            "count": 1,
            "option__color_code": "#0E590A",
            "option__parent_id": null,
            "option__score": 0,
            "option__text": "10",
            "option_id": 100
          },
          {
            "count": 2,
            "option__color_code": "#01ad0f",
            "option__parent_id": null,
            "option__score": 0,
            "option__text": "6",
            "option_id": 96
          },
          {
            "count": 2,
            "option__color_code": "#0E590A",
            "option__parent_id": null,
            "option__score": 0,
            "option__text": "9",
            "option_id": 99
          }
        ]
      }
    };
  }));

  it('should define controller', function(){
    expect(controller).toBeDefined();
  });

  it('init the datepicker options', function(){
    expect($rootScope.datePickerOption).toBeDefined();
  });

  describe('resetDates method', function(){
    it('reset dates', function(){
      controller.resetDates();
      var d = new Date();
      d.setDate(d.getUTCDate() - 1);
      expect($rootScope.date.startDate._d.getDate()).toBe(d.getUTCDate());
      expect($rootScope.date.endDate._d.getDate()).toBe(new Date().getUTCDate());
    });

  });

  describe('drawRecommendationLikeness method', function(){

    it('init scope arrays when api call succeeds', function(){
      controller.draw_recommendation_likeness();

      $httpBackend.whenGET(apiLink).respond(httpResponse);
      $httpBackend.flush();

      expect($rootScope.feedback_count).toBe(10);
      expect($rootScope.recommendation_likeness_data[0]["category"]).toEqual("2");
      expect($rootScope.nps_score).toBe(-30);
    });

    it('shows flash when api call fails', function(){
      controller.draw_recommendation_likeness();
      httpResponse.success = false;
      spyOn(flashService, 'createFlash');

      $httpBackend.whenGET(apiLink).respond(httpResponse);
      $httpBackend.flush();

      expect(flashService.createFlash).toHaveBeenCalled();
    });

  });

});
