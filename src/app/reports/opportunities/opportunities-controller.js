(function() {
  angular.module('livefeed.reports.opportunities')

  .controller( 'ReportsOpportunitiesCtrl', ReportsOpportunitiesCtrl);

  function ReportsOpportunitiesCtrl( $scope, $rootScope) {
    var vm = this;
    vm.opportunities = opportunities;

    function opportunities(){
      $scope.opportunity_data = [];
      $scope.opportunity_data =  _.map($scope.opportunity_analysis.feedbacks, function(data, index) {
        return {
          index: ('0' + (index+1)).slice(-2),
          name: data.option__text,
          count: data.count,
          percentage: data.count === 0 ? 0 : Math.round((data.count / $scope.opportunity_analysis.feedback_count) * 100),
          color: data.option__color_code
        };
      });
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.opportunities();
    });

  }

})();