describe('ReportTopConcernsCtrl', function(){

  var $rootScope, controller;

  beforeEach(module('livefeed.reports.top_concerns'));

  beforeEach(inject(function(_$rootScope_, $controller) {

    $rootScope = _$rootScope_;
    controller = $controller('ReportsTopConcernsCtrl', { $scope: $rootScope });
    $rootScope.concerns = {
      concern_count: 1,
      concern_list: [{
        id: 1,
        name: "Bun",
        weight: 37
      }]
    };

  }));

  describe('age_group_analysis method', function(){
    it('init scope array when function calls ', function(){
      controller.top_concerns();
      expect($rootScope.concerns_splice_data[0][0].name).toEqual("Bun");
    });
  });

  describe('$rootScope.$on method', function(){
    it('should respond to the "report-data-received" event', function(){
      spyOn(controller, 'top_concerns');
      $rootScope.$broadcast('report-data-received');
      expect(controller.top_concerns).toHaveBeenCalled();
    });
  });

});
