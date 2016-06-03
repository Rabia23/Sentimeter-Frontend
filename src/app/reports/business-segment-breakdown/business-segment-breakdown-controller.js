(function() {
  angular.module('livefeed.reports.business_segment_breakdown')

  .controller( 'ReportsBusinessSegmentBreakDownCtrl', ReportsBusinessSegmentBreakDownCtrl);

  function ReportsBusinessSegmentBreakDownCtrl( $scope, $rootScope) {

    var vm = this;
    vm.business_segment_breakdown = business_segment_breakdown;

    $scope.get_total = function(segments){
      return _.reduce(segments, function(memo, segment){ return memo + segment.count; }, 0);
    };

    function business_segment_breakdown(){
      $scope.segment_names = _.pluck($scope.segmentation_rating[0].segments, 'segment_name');
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.business_segment_breakdown();
    });

  }
})();