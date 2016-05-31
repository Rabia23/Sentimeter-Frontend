(function() {
  angular.module('livefeed.reports.business_segment_breakdown')

  .controller( 'ReportsBusinessSegmentBreakDownCtrl', ReportsBusinessSegmentBreakDownCtrl);

  function ReportsBusinessSegmentBreakDownCtrl( $scope, $rootScope) {

    var vm = this;
    vm.business_segment_breakdown = business_segment_breakdown;
    vm.get_sub_options_detail = get_sub_options_detail;
    vm.get_option_labels = get_option_labels;
    vm.get_options_data = get_options_data;
    vm.get_option_detail = get_option_detail;
    vm.get_option_class = get_option_class;
    vm.get_sub_options_labels = get_sub_options_labels;
    vm.get_sub_options_data = get_sub_options_data;

    function get_option_labels(){
      $scope.qsc_segments = [];
      _.each($scope.segmentation_rating.segments[0].option_data, function(item) {
        $scope.qsc_segments.push({option_name: item.option__text, total_count: 0});
      });
    }

    function get_options_data(){
      $scope.segments = [];
      _.each($scope.segmentation_rating.segments, function(segment) {
        $scope.segments.push({segment_name: segment.segment});
        vm.get_option_detail(segment.option_data, segment.segment);
      });
    }

    function get_option_detail(option_data, segment){
      _.each(option_data, function(item, index) {
        if(item.option__text == $scope.qsc_segments[index].option_name){
          $scope.qsc_segments[index][segment] = item.count;
          $scope.qsc_segments[index].total_count += item.count;
          vm.get_option_class(item.option__text, index);
        }
      });
    }

    function get_option_class(option_text, index){
      if(option_text == "Quality"){
        $scope.qsc_segments[index]["option_class"] = "red";
      }
      if(option_text == "Service"){
        $scope.qsc_segments[index]["option_class"] = "yellow";
      }
      if(option_text == "Cleanliness"){
        $scope.qsc_segments[index]["option_class"] = "blue";
      }
    }

    function get_sub_options_labels(){
      _.each($scope.segmentation_rating.sub_options_segments, function(data, index) {
        if(data.option_name == $scope.qsc_segments[index].option_name){
          var sub_option_labels = [];
          _.each(data.sub_option_segments_list[0].option_data, function(item) {
            sub_option_labels.push({'sub_option': item.option__text, total_count: 0});
          });
          $scope.qsc_segments[index]["sub_options_labels"] = sub_option_labels;
        }
      });
    }

    function get_sub_options_data(){
      _.each($scope.segmentation_rating.sub_options_segments, function(data, position) {
        if(data.option_name == $scope.qsc_segments[position].option_name){
          vm.get_sub_options_detail(data.sub_option_segments_list, position);
        }
      });
    }

    function get_sub_options_detail(sub_option_segments_list, position){
      _.each(sub_option_segments_list, function(item) {
        _.each(item.option_data, function(value, index) {
          if(value.option__text == $scope.qsc_segments[position]["sub_options_labels"][index].sub_option){
            $scope.qsc_segments[position]["sub_options_labels"][index][item.segment] = value.count;
            $scope.qsc_segments[position]["sub_options_labels"][index].total_count += value.count;
          }
        });
      });
    }

    function business_segment_breakdown(){
      vm.get_option_labels();
      vm.get_options_data();
      vm.get_sub_options_labels();
      vm.get_sub_options_data();
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.business_segment_breakdown();
    });

  }
})();