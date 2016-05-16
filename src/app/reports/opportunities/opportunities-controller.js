(function() {
  angular.module('livefeed.reports.opportunities')

  .controller( 'ReportsOpportunitiesCtrl', function( $scope, $rootScope, OpportunitiesFactory) {
    var vm = this;
    vm.opportunities = opportunities;

    function opportunities(){
      $scope.opportunity_data = [];
      $scope.opportunity_data =  _.map($scope.strength.feedbacks, function(data, index) {
        return {
          index: ('0' + (index+1)).slice(-2),
          name: data.option__text,
          count: data.count,
          percentage: data.count === 0 ? 0 : Math.round((data.count / $scope.strength.feedback_count) * 100),
          option_class: OpportunitiesFactory.OpportunitiesOptionClass[data.option__text]
        };
      });
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.opportunities();
    });

  });

})();