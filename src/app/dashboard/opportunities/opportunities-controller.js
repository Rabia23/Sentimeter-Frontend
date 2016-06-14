(function() {
  angular.module('livefeed.dashboard.opportunities')

  .controller( 'OpportunitiesCtrl', function OpportunitiesCtrl( $scope, Graphs, flashService, opportunityFeedbackDataService ) {

    $scope.today = new Date();
    $scope.show_loading = true;

    var vm = this;
    vm.resetDates = resetDates;
    vm.draw_opportunity_analysis = draw_opportunity_analysis;

    vm.resetDates();
    vm.draw_opportunity_analysis();

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
          vm.draw_opportunity_analysis(ev.model.startDate._i, ev.model.endDate._i);
        }
      },
      opens: "left"
    };

    $scope.get_question_data = function(question){
      $scope.question_data = {};
      $scope.question_data = _.find($scope.opportunities_data, function(data){ return data.question == question; });
    };

    function draw_opportunity_analysis(start_date, end_date){
      Graphs.opportunity_analysis("", "", "", start_date, end_date).$promise.then(function(opportunity_data){
        $scope.show_loading = false;
        if(opportunity_data.success) {
          $scope.opportunities_data = [];
          $scope.question_data = {};
          $scope.opportunities_data = opportunityFeedbackDataService.getFeedbackData(opportunity_data);
          $scope.question_data = _.find($scope.opportunities_data, function(data){ return data.question == opportunity_data.response[0].question; });
        }
        else{
          flashService.createFlash(opportunity_data.message, "danger");
        }
      });
    }
  });
})();
