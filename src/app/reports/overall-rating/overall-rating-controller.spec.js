describe('ReportOverallRatingCtrl', function(){

  var $rootScope, controller;

  beforeEach(module('livefeed.reports.overall_rating'));

  beforeEach(inject(function(_$rootScope_, $controller) {

    $rootScope = _$rootScope_;
    controller = $controller('ReportsOverallRatingCtrl', { $scope: $rootScope });
    $rootScope.overall_feedback = {
      "feedback_count": 4,
      "feedbacks": [
        {
          "count": 0,
          "option__color_code": "#0E590A",
          "option__parent_id": null,
          "option__score": 4,
          "option__text": "I'm lovin' it",
          "option_id": 57
        }
      ]
    };

  }));

  describe('overall_rating method', function(){
    it('init scope array when function calls', function(){
      controller.overall_rating();
      expect($rootScope.rating_data[0].name).toEqual("I'm lovin' it");
    });
  });

  describe('$rootScope.$on method', function(){
    it('should respond to the "report-data-received" event', function(){
      spyOn(controller, 'overall_rating');
      $rootScope.$broadcast('report-data-received');
      expect(controller.overall_rating).toHaveBeenCalled();
    });
  });

});
