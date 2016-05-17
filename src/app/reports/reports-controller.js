(function() {
  angular.module( 'livefeed.reports')

  .controller( 'ReportsCtrl', function ReportsCtrl( $scope, $rootScope, flashService, ReportsApi) {

    $scope.today = new Date();
    $scope.show_loading = true;

    var vm = this;
    vm.resetDates = resetDates;
    vm.generate_report = generate_report;

    vm.resetDates();
    vm.generate_report();

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
          vm.generate_report(ev.model.startDate._i, ev.model.endDate._i);
        }
      },
      opens: "left"
    };

    function generate_report(start_date, end_date){
      ReportsApi.report(start_date, end_date).$promise.then(function(data){
        $scope.show_loading = false;
        if(data.success){
          $scope.complaint_view = data.response.complaint_view;
          $scope.concerns = data.response.concerns;
          $scope.customer_analysis = data.response.customer_analysis;
          $scope.overall_feedback = data.response.overall_feedback;
          $scope.overall_rating = data.response.overall_rating;
          $scope.recommendation_analysis = data.response.recommendation_analysis;
          $scope.segmentation_rating = data.response.segmentation_rating;
          $scope.strength = data.response.strength;
          $scope.top_rankings = data.response.top_rankings;

          $rootScope.$broadcast('report-data-received');
        }
        else{
          flashService.createFlash(data.message, "danger");
        }
      });
    }

  });

})();
