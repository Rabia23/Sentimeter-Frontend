describe('ReportAgeGroupAnalysisCtrl', function(){

  var $rootScope, controller;

  beforeEach(module('livefeed.reports.age_group_analysis'));

  beforeEach(inject(function(_$rootScope_, $controller) {

    $rootScope = _$rootScope_;
    controller = $controller('ReportsAgeGroupAnalysisCtrl', { $scope: $rootScope });
    $rootScope.customer_analysis = {
      "feedback_count": 10,
      "customer_analysis": [
        {
          "age_group_id": 0,
          "age_group_label": "Below 18",
          "count": 4,
          "gender_division":[
            {
              "count": 2,
              "gender_group_id": 0,
              "gender_group_label": "MALE",
              "color_code": "#26AAE2"
            },
            {
              "count": 2,
              "gender_group_id": 1,
              "gender_group_label": "FEMALE",
              "color_code": "#F174AC"
            }
          ]
        }
      ]
    };

  }));

  describe('age_group_analysis method', function(){
    it('init scope array when function calls ', function(){
      controller.age_group_analysis();
      expect($rootScope.customer_data[0].label).toEqual("Below 18");
    });
  });

  describe('$rootScope.$on method', function(){
    it('should respond to the "report-data-received" event', function(){
      spyOn(controller, 'age_group_analysis');
      $rootScope.$broadcast('report-data-received');
      expect(controller.age_group_analysis).toHaveBeenCalled();
    });
  });

});
