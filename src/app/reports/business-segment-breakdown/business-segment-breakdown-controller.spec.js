describe('ReportsBusinessSegmentBreakDownCtrl', function(){

  var $rootScope, controller;

  beforeEach(module('livefeed.reports.business_segment_breakdown'));

  beforeEach(inject(function(_$rootScope_, $controller) {

    $rootScope = _$rootScope_;
    controller = $controller('ReportsBusinessSegmentBreakDownCtrl', { $scope: $rootScope });
    $rootScope.segmentation_rating = [{
      option_object: {
        color_code: "#1f9aec",
        id: 1,
        text: "Cleanliness"
      },
      segments: [
        {
          count: 0,
          segment: 1,
          segment_name: "Morning"
        },
        {
          count: 2,
          segment: 2,
          segment_name: "Afternoon"
        },
        {
          count: 0,
          segment: 3,
          segment_name: "Evening"
        },
        {
          count: 0,
          segment: 4,
          segment_name: "Night"
        },
        {
          count: 0,
          segment: 5,
          segment_name: "Late Night"
        }

      ]
    }];


  }));

  describe('$rootScope.$on method', function(){
    it('should respond to the "report-data-received" event', function(){
      spyOn(controller, 'business_segment_breakdown');
      $rootScope.$broadcast('report-data-received');
      expect(controller.business_segment_breakdown).toHaveBeenCalled();
    });
  });

  describe('get_total method', function(){
    it('should return total of all counts in segments', function(){
      expect($rootScope.get_total($rootScope.segmentation_rating[0].segments)).toEqual(2);
    });
  });


  describe('business_segment_breakdown method', function(){

    
    it('should define months', function(){
      controller.business_segment_breakdown();
      expect($rootScope.segment_names).toBeDefined();
    });
  
  });

});
