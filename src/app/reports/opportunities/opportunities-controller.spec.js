describe('ReportOpportunitiesCtrl', function(){

  var $rootScope, controller;

  beforeEach(module('livefeed.reports.opportunities'));

  beforeEach(inject(function(_$rootScope_, $controller) {

    $rootScope = _$rootScope_;
    controller = $controller('ReportsOpportunitiesCtrl', { $scope: $rootScope });
    $rootScope.opportunity_analysis = {
      "feedback_count": 99,
      "feedbacks": [
        {
          "count": 19,
          "option__parent_id": null,
          "option__color_code":"#4CCC72",
          "option__score": 0,
          "option__text": "Quality of Food",
          "option_id": 37
        },
        {
          "count": 19,
          "option__parent_id": null,
          "option__color_code": "#3598DC",
          "option__score": 0,
          "option__text": "Friendly & Courteous Staff",
          "option_id": 38
        }
      ]
    };

  }));

  describe('opportunities method', function(){
    it('init scope array when function calls ', function(){
      controller.opportunities();
      expect($rootScope.opportunity_data[0].name).toEqual("Quality of Food");
    });
  });

  describe('$rootScope.$on method', function(){
    it('should respond to the "report-data-received" event', function(){
      spyOn(controller, 'opportunities');
      $rootScope.$broadcast('report-data-received');
      expect(controller.opportunities).toHaveBeenCalled();
    });
  });

});
