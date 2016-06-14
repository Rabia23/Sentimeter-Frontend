describe('OverallFeedbackCtrl', function(){

  var $rootScope, $httpBackend, controller, flashService, mockResponse;
  var apilink = 'https://apiarbisoft.sentimeter.io/api/overall_feedback';

  beforeEach(module('livefeed.dashboard.overall_feedback'));
  beforeEach(module('livefeed'));

  beforeEach(inject(function(_$httpBackend_,_$rootScope_,$controller,_flashService_) {
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    flashService = _flashService_;
    controller = $controller('OverallFeedbackCtrl', { $scope: $rootScope });
    window.ga = function(){};
    mockResponse = {
      success: true,
      response: [
        {
          "question": "How happy are you at your job today?",
          "feedback_count": 25,
          "feedback": [
            {
              "count": 10,
              "option__color_code": "#0E590A",
              "option__parent_id": null,
              "option__score": 5,
              "option__text": "Very happy",
              "option_id": 5
            },
            {
              "count": 15,
              "option__color_code": "#01ad0f",
              "option__parent_id": null,
              "option__score": 4,
              "option__text": "Happy",
              "option_id": 4
            }
          ]
        }
      ]
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
      expect($rootScope.date.startDate._d.getDate()).toBe(new Date().getUTCDate()-1);
      expect($rootScope.date.endDate._d.getDate()).toBe(new Date().getUTCDate());
    });

  });

  describe('showGraph method', function(){
    it('init scope array and object when api call succeeds', function(){
      controller.show_graph();

      $httpBackend.whenGET(apilink).respond(mockResponse);
      $httpBackend.flush();

      expect($rootScope.rating_data[0].question).toEqual("How happy are you at your job today?");
      expect($rootScope.question_data.question).toEqual("How happy are you at your job today?");
    });

    it('shows flash when api call fails', function(){
      controller.show_graph();
      mockResponse.success = false;

      spyOn(flashService, 'createFlash');
      $httpBackend.whenGET(apilink).respond(mockResponse);
      $httpBackend.flush();

      expect(flashService.createFlash).toHaveBeenCalled();
    });
  });

  describe('get_question_data method', function(){

    it('init $scope object when function called', function(){
      var question = "How happy are you at your job today?";
      $rootScope.rating_data = [
        {
          "question": "How happy are you at your job today?",
          "feedback_count": 25,
          "show_canvas": true,
          "show_labels": true
        }
      ];
      $rootScope.get_question_data(question);
      expect($rootScope.question_data.question).toEqual("How happy are you at your job today?");
    });
  });

});