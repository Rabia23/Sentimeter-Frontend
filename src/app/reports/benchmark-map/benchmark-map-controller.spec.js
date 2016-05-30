describe('ReportsBenchmarkMapCtrl', function(){

  var $rootScope, controller;

  beforeEach(module('livefeed.reports.benchmark-map'));

  beforeEach(inject(function(_$rootScope_, $controller) {

    $rootScope = _$rootScope_;
    controller = $controller('ReportsBenchmarkMapCtrl', { $scope: $rootScope });
    $rootScope.benchmark_analysis = {
      branch_count: 12,
      branches_data: [
        {
          city: "Jhelum",
          id: 1,
          latitude: 31.321321,
          longitude: 72.321321,
          name: "River Jhelum",
          region: "Asif",
          total_feedback_count: 0,
          details: [
            {
              count_exceeded: false,
              date: "2016-05-29",
              feedback_count: 0
            },
            {
              count_exceeded: false,
              date: "2016-05-30",
              feedback_count: 0
            }
          ]
        }
      ]
    };


  }));

  describe('$rootScope.$on method', function(){
    it('should respond to the "report-data-received" event', function(){
      spyOn(controller, 'benchmark_map');
      $rootScope.$broadcast('report-data-received');
      expect(controller.benchmark_map).toHaveBeenCalled();
    });
  });

  describe('get_day method', function(){
    it('should return day given the date', function(){
      expect($rootScope.get_day('2016-05-02')).toEqual(02);
    });
  });

  describe('keys method', function(){
    it('should return keys of given Object', function(){
      expect(controller.keys({1: {name: "hello word"}, 2: {name: "hello word"}})).toEqual(["1", "2"]);
    });
  });

  describe('months method', function(){
    it('should return months names given months numbers', function(){
      expect(controller.months(["4","5"])).toEqual(["May", "Jun"]);
    });
  });

  describe('benchmark_map method', function(){
    it('should define keys', function(){
      controller.benchmark_map();
      expect($rootScope.keys).toBeDefined();
    });
    
    it('should define months', function(){
      controller.benchmark_map();
      expect($rootScope.months).toBeDefined();
    });

    it('should group details by date months', function(){
      controller.benchmark_map();
      expect($rootScope.benchmark_analysis.branches_data[0].details)
      .toEqual(
        { 4: [ 
            { count_exceeded: false, date: '2016-05-29', feedback_count: 0 }, 
            { count_exceeded: false, date: '2016-05-30', feedback_count: 0 } 
          ] 
        });
    });
  
  });

});
