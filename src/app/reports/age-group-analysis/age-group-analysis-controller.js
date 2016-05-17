(function() {
  angular.module('livefeed.reports.age_group_analysis')

  .controller( 'ReportsAgeGroupAnalysisCtrl', function( $scope, $rootScope) {
    var vm = this;
    vm.age_group_analysis = age_group_analysis;

    function age_group_analysis(){
      $scope.customer_data = [];
      $scope.customer_data =  _.map($scope.customer_analysis.customer_analysis, function(data) {
        var obj = {"label": data.age_group_label, "total_count": data.count};
        _.each(data.gender_division, function(value){
          if(value.gender_group_label === "MALE"){
            obj["male_count"] = value.count;
          }
          else if(value.gender_group_label === "FEMALE"){
            obj["female_count"] = value.count;
          }
        });
        return obj;
      });
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.age_group_analysis();
    });

  });

})();