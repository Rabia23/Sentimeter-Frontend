(function() {
  angular.module('livefeed.dashboard.overall_feedback')

  .controller( 'OverallFeedbackCtrl', function DashboardController( $scope, Graphs, flashService, overallFeedbackDataService ) {

    $scope.show_loading = true;
    $scope.today = new Date();

    var vm = this;
    vm.resetDates = resetDates;
    vm.show_graph = show_graph;

    vm.resetDates();
    vm.show_graph();

    function resetDates(){
      $scope.date = {
        startDate: moment().subtract(1, "days"),
        endDate: moment()
      };
    }

    $scope.datePickerOption = {
      eventHandlers: {
          'apply.daterangepicker': function(ev, picker){
            $scope.show_loading = true;
            vm.show_graph(ev.model.startDate._i, ev.model.endDate._i);
          }
      },
      opens: "left"
    };

    $scope.get_question_data = function(question){
      $scope.question_data = {};
      $scope.question_data = _.find($scope.rating_data, function(data){ return data.question == question; });
    };

    function show_graph(start_date, end_date){
      Graphs.overall_feedback(start_date, end_date).$promise.then(function(graph_data){
        $scope.show_loading = false;
        if(graph_data.success) {
          $scope.rating_data = [];
          $scope.question_data = {};
          $scope.rating_data = overallFeedbackDataService.getFeedbackData(graph_data);
          $scope.question_data = $scope.rating_data[0];
        }
        else {
          flashService.createFlash(graph_data.message, "danger");
        }
      });
    }

  });
})();