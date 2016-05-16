(function() {
  angular.module('livefeed.reports.business_segment_breakdown')

  .controller( 'ReportsBusinessSegmentBreakDownCtrl', function( $scope, $rootScope) {

    var vm = this;
    vm.business_segment_breakdown = business_segment_breakdown;

    function business_segment_breakdown(){
      $scope.segments = [];
      _.each($scope.segmentation_rating.segments, function(data) {
        $scope.segments.push({segment_name: data.segment});
      });
    }
    $rootScope.$on('report-data-received', function (event, data) {
      vm.business_segment_breakdown();
    });

  });
})();