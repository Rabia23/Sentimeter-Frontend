describe('OpportunitiesCtrl', function(){
  
  var $rootScope, $httpBackend, controller, flashService;
  var apilink = 'https://apiarbisoft.sentimeter.io/api/opportunity_analysis?branch=&city=&date_from=&date_to=&region=';
  
  beforeEach(module('livefeed.dashboard.opportunities'));
  beforeEach(module('livefeed'));

  beforeEach(inject(function(_$httpBackend_,_$rootScope_, _$controller_, _flashService_) {
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    flashService = _flashService_;
    controller =  _$controller_("OpportunitiesCtrl", {$scope: $rootScope});
    window.ga = function(){};
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
      expect($rootScope.date.startDate._d.getDate()).toBe(new Date().getUTCDate()-1);
      expect($rootScope.date.endDate._d.getDate()).toBe(new Date().getUTCDate());
    });

  });

  describe('drawOpportunityAnalysis method', function(){

    it('success with data init $scope array and object', function(){
      $httpBackend.whenGET(apilink)
        .respond(
          {
            success: true,
            response: [
              {
                "question": "What would make you happier at work Today?",
                "feedback_count": 9,
                "feedback": [
                  {
                    "option__parent_id": null,
                    "option__color_code": "#F0C547",
                    "option__score": 0,
                    "option__text": "A delicious & healthy lunch",
                    "option_id": 29,
                    "count": 9
                  }
                ]
              }
            ]

          });

      $httpBackend.flush();
      expect($rootScope.opportunities_data[0].question).toEqual("What would make you happier at work Today?");
      expect($rootScope.question_data.question).toEqual("What would make you happier at work Today?");
    });

    it('show flash when api request failure', function(){

      spyOn(flashService, 'createFlash');

      $httpBackend.whenGET(apilink)
      .respond({ success: false });

      $httpBackend.flush();
      expect(flashService.createFlash).toHaveBeenCalled();
    });
  });

  describe('get_question_data method', function(){

    it('init $scope object when function called', function(){
      var question = "What would make you happier at work Today?";
      $rootScope.opportunities_data = [
        {
          "question": "What would make you happier at work Today?",
          "data":[
            {
              "$hashKey": "object:159",
              "colour": "#F0C547",
              "id": 29,
              "name": "A delicious & healthy lunch",
              "people": 9,
              "percentage": 100
            }
          ]
        }
      ];
      $rootScope.get_question_data(question);
      expect($rootScope.question_data.data[0].people).toEqual(9);
    });
  });

});