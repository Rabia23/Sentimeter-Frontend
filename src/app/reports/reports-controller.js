(function() {
  angular.module( 'livefeed.reports')

  .controller( 'ReportsCtrl', function ReportsCtrl( $scope, $rootScope, flashService, ReportsApi) {

    var vm = this;
    vm.generate_report = generate_report;

    vm.generate_report();

    function generate_report(){
      ReportsApi.report().$promise.then(function(data){
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
