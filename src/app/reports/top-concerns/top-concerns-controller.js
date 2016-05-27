(function() {
  angular.module('livefeed.reports.top_concerns')

  .controller( 'ReportsTopConcernsCtrl', ReportsTopConcernsCtrl);

  function ReportsTopConcernsCtrl( $scope, $rootScope) {
    var vm = this;
    vm.top_concerns = top_concerns;

    function top_concerns(){
      $scope.concerns_splice_data = [];
      var concerns_data = [];
      concerns_data = _.map($scope.concerns.concern_list, function(data, index) {
        return {
          index: ('0' + (index+1)).slice(-2),
          name: data.name,
          count: data.weight
        };
      });
      while(concerns_data.length > 0){
        $scope.concerns_splice_data.push(concerns_data.splice(0,2));
      }
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.top_concerns();
    });

  }

})();