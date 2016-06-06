(function() {
  angular.module('livefeed.reports.business_segment_breakdown')

  .controller( 'ReportsBusinessSegmentBreakDownCtrl', ReportsBusinessSegmentBreakDownCtrl);

  function ReportsBusinessSegmentBreakDownCtrl( $scope, $rootScope) {

    var vm = this;
    vm.business_segment_breakdown = business_segment_breakdown;
    vm.calculate_max = calculate_max;

    $scope.get_total = function(segments){
      return _.reduce(segments, function(memo, segment){ return memo + segment.count; }, 0);
    };

    function business_segment_breakdown(){
      $scope.segment_names = _.pluck($scope.segmentation_rating[0].segments, 'segment_name');  
      calculate_max();
    }

    function calculate_max(){  
      _.each($scope.segmentation_rating, function(rating, index){
        var max_segment = _.max(rating.segments, function(segment){ return segment.count; });
        
        if(typeof(max_segment) === "object"){
          rating.option_object.max_segment_count = max_segment.count;
        }
        else{
          rating.option_object.max_segment_count = max_segment[0].count;
        }

        _.each(rating.sub_option_segments, function(sub_option_segment, index){
          
          var sub_max_segment = _.max(sub_option_segment.segments, function(segment){ return segment.count; });
        
          if(typeof(sub_max_segment) === "object"){
            sub_option_segment.sub_max_segment_count = sub_max_segment.count;
          }
          else{
            sub_option_segment.sub_max_segment_count = sub_max_segment[0].count;
          }
        
        });

      });
    
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.business_segment_breakdown();
    });

  }
})();