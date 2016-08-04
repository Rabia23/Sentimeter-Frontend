(function() {
  angular.module('livefeed.dashboard.overall_rating')

  .controller( 'TimeLineCtrl', function DashboardController( $scope, overallRatingChartService, Graphs, flashService ) {
    $scope.height = 0;
    $scope.width = 0;

    $scope.today = new Date();

    $scope.mainView = true;
    $scope.optionView = false;

    $scope.page = 1;
    $scope.max_page = 1;

    var vm = this;
    vm.start_date = null;
    vm.end_date = null;
    vm.resetDates = resetDates;
    vm.calculate_data_sets = calculate_data_sets;
    vm.getLabelColor = getLabelColor;
    vm.drawGraph = drawGraph;
    vm.drawOptionGraph = drawOptionGraph;

    vm.resetDates();

    function resetDates(){
      $scope.date = {
        startDate: moment().subtract(6, "days"),
        endDate: moment()
      };
    }

    $scope.datePickerOption = {
      eventHandlers: {
        'apply.daterangepicker': function(ev, picker){
          $scope.show_loading = true;
          if($scope.mainView){
            vm.start_date = ev.model.startDate._i;
            vm.end_date = ev.model.endDate._i;
            $scope.mainRating();
          }
        }
      },
      opens: "left"
    };

    function calculate_data_sets(data, value){
      var data_array = [];
      if (data.response.length > value) {
        var sets = data.response.length / value;
        while (data.response.length > 0) {
          data_array.push(data.response.splice(0, value));
        }
      }
      else {
        data_array[0] = data.response;
      }
      $scope.max_page = data_array.length;
      return data_array;
    }

    function getLabelColor(timelinedata, value){
      var label_value;
      _.each(timelinedata.labels, function(val, ind){
        if(val.value === value.option__text){
          label_value = val;
        }
      });
      return label_value;
    }

    function drawGraph(data, feedbacks){
      vm.timelinedata = overallRatingChartService.getAreaLabelChart(data);
      $scope.labels = _.map(feedbacks, function (value, index) {
        var label_value = getLabelColor(vm.timelinedata, value);
        return {
          option_id: value.option_id,
          option_name: value.option__text,
          parent_id: value.option__parent_id,
          color: label_value.color,
          lineColor: label_value.color,
          title: value.option__text,
          id:  label_value.column + "-id",
          valueField: label_value.column
        };
      });
      return [$scope.labels, vm.timelinedata.data];
    }

    $scope.mainRating = function(option){

      $scope.show_loading = true;
      $scope.optionView = false;
      vm.option_id = (option)? option.option_id : null;
      $scope.mainView = (option)? false : true;
      Graphs.overall_rating(vm.option_id, vm.start_date, vm.end_date).$promise.then(function (data) {
        if(data.success) {
          $scope.data_array = [];
          if($scope.width < $scope.height) {
            $scope.data_array = calculate_data_sets(data, 3);
          }
          else {
            $scope.data_array = calculate_data_sets(data, 7);
          }
          $scope.page = 1;
          $scope.overall_rating_data = [];
          $scope.overall_rating_data = drawGraph($scope.data_array[0], $scope.data_array[0][0].data.feedbacks);
          $scope.show_loading = false;
        }
        else{
          flashService.createFlash(data.message, "danger");
        }
      });
    };

    function drawOptionGraph(data,labels){
      return [labels, data];
    }

    $scope.optionClick = function (option_object){
      $scope.option_object = option_object;
      vm.option_id = option_object.item.dataContext[option_object.graph.id];
      vm.date = option_object.item.category;
      if($scope.mainView) {
        $scope.show_loading = true;

        Graphs.feedback_segmentation(vm.date, vm.option_id).$promise.then(function (data) {
          $scope.show_loading = false;
          if (data.success) {
            $scope.mainView = false;
            $scope.optionView = true;
            if (data.response.options !== undefined) {
              vm.qsc_sub_options_data = {};
              vm.qsc_sub_options_data = overallRatingChartService.getAreaSegmentChart(data.response.options);
              $scope.labels = _.map(data.response.options, function (value, index) {
                var label_value = getLabelColor(vm.qsc_sub_options_data, value);
                return {
                  option_name: value.option__text,
                  parent_id: "",
                  color: value.option__color_code,
                  lineColor: value.option__color_code,
                  title: value.option__text,
                  id: "column-"+(index+1)+"-id",
                  valueField: "column-"+(index+1)
                };
              });
              $scope.segments_data_array = [];
              $scope.page = 1;
              $scope.max_page = 1;
              if($scope.width < $scope.height) {
                while (vm.qsc_sub_options_data.data.length > 0) {
                  $scope.segments_data_array.push(vm.qsc_sub_options_data.data.splice(0, 3));
                }
                $scope.max_page = $scope.segments_data_array.length;
                $scope.overall_rating_data = [];
                $scope.overall_rating_data = drawOptionGraph($scope.segments_data_array[0],$scope.labels);
              }
              else {
                $scope.overall_rating_data = drawOptionGraph(vm.qsc_sub_options_data.data,$scope.labels);
              }
            }
          }
          else {
            flashService.createFlash(data.message, "danger");
          }
        });
      }
    };

    $scope.Next = function(){
      if($scope.page < $scope.max_page){
        $scope.page = $scope.page + 1;
        $scope.overall_rating_data = drawGraph($scope.data_array[($scope.page -1 )], $scope.data_array[0][0].data.feedbacks);
      }
    };

    $scope.optionNext = function(){
      if($scope.page < $scope.max_page){
        $scope.page = $scope.page + 1;
        $scope.overall_rating_data = drawOptionGraph($scope.segments_data_array[($scope.page -1 )],$scope.labels);
      }
    };

    $scope.backToMain = function() {
      $scope.mainRating();
    };

    $scope.Prev = function(){
      if($scope.page > 1){
        $scope.page = $scope.page - 1;
        $scope.overall_rating_data = drawGraph($scope.data_array[($scope.page -1 )], $scope.data_array[0][0].data.feedbacks);
      }
    };

    $scope.optionPrev = function(){
      if($scope.page > 1){
        $scope.page = $scope.page - 1;
        $scope.overall_rating_data = drawOptionGraph($scope.segments_data_array[($scope.page -1 )],$scope.labels);
      }
    };

  });
})();
