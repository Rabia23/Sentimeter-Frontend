(function() {
  angular.module('livefeed.reports.business_segment_breakdown')

  .controller( 'ReportsBusinessSegmentBreakDownCtrl', function( $scope, $rootScope) {

    var vm = this;
    vm.business_segment_breakdown = business_segment_breakdown;

    function business_segment_breakdown(){
      $scope.segments = [];
      $scope.qsc_segments = [];

      _.each($scope.segmentation_rating.segments[0].option_data, function(item) {
        $scope.qsc_segments.push({option_name: item.option__text, total_count: 0});
      });
      _.each($scope.segmentation_rating.segments, function(segment) {
        $scope.segments.push({segment_name: segment.segment});
        _.each(segment.option_data, function(item, index) {
          if(item.option__text == $scope.qsc_segments[index].option_name){
            $scope.qsc_segments[index][segment.segment] = item.count;
            $scope.qsc_segments[index].total_count += item.count;
            if(item.option__text == "Quality"){
              $scope.qsc_segments[index]["option_class"] = "red";
            }
            if(item.option__text == "Service"){
              $scope.qsc_segments[index]["option_class"] = "yellow";
            }
            if(item.option__text == "Cleanliness"){
              $scope.qsc_segments[index]["option_class"] = "blue";
            }
          }
        });
      });
      _.each($scope.segmentation_rating.sub_options_segments, function(data, index) {
        if(data.option_name == $scope.qsc_segments[index].option_name){
          var sub_option_labels = [];
          _.each(data.sub_option_segments_list[0].option_data, function(item) {
            sub_option_labels.push({'sub_option': item.option__text, total_count: 0});
          });
          $scope.qsc_segments[index]["sub_options_labels"] = sub_option_labels;
        }
      });
      _.each($scope.segmentation_rating.sub_options_segments, function(data, ind) {
        if(data.option_name == $scope.qsc_segments[ind].option_name){
          _.each(data.sub_option_segments_list, function(item) {
            _.each(item.option_data, function(value, index) {
              if(value.option__text == $scope.qsc_segments[ind]["sub_options_labels"][index].sub_option){
                $scope.qsc_segments[ind]["sub_options_labels"][index][item.segment] = value.count;
                $scope.qsc_segments[ind]["sub_options_labels"][index].total_count += value.count;
              }
            });
          });
        }
      });
      console.log($scope.qsc_segments);
    }
    $rootScope.$on('report-data-received', function (event, data) {
      vm.business_segment_breakdown();
    });

  });
})();