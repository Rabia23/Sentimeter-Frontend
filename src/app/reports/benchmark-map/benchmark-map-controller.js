(function() {
  angular.module('livefeed.reports.benchmark-map')

  .controller( 'ReportsBenchmarkMapCtrl', ReportsBenchmarkMapCtrl);

  function ReportsBenchmarkMapCtrl( $scope, $rootScope ) {

    var vm = this;
    vm.benchmark_map = benchmark_map;
    vm.keys = keys;
    vm.months = months;

    $scope.get_dates = function(index){
      return $scope.benchmark_analysis.branches_data[0].details[$scope.keys[index]];
    };

    $scope.get_day = function(date){
      return moment(date).date();
    };

    $scope.get_branch_detail = function(branch, index){
      return branch.details[$scope.keys[index]];
    };

    function benchmark_map(){
      _.each($scope.benchmark_analysis.branches_data, function(item, index){
        item.details = _.groupBy(item.details, function(detail){ 
          return moment(detail.date).month(); 
        });
      });
      $scope.keys = vm.keys($scope.benchmark_analysis.branches_data[0].details);
      $scope.months = vm.months($scope.keys);

    }

    function keys(object){
      return Object.keys(object);
    }

    function months(months_number_array){
      return _.map(months_number_array, function(item){
        return moment.monthsShort(parseInt(item, 10));
      });
    }


    $rootScope.$on('report-data-received', function (event, data) {
      vm.benchmark_map();
    });
  
  }
})();