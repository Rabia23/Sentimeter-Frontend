(function() {
  angular.module('livefeed.reports.overall_rating')

  .controller( 'ReportsOverallRatingCtrl', function( $scope, $rootScope) {
    var vm = this;
    vm.overall_rating = overall_rating;

    function overall_rating(){
      $scope.rating_data = [];
      $scope.rating_data =  _.map($scope.overall_feedback.feedbacks, function(data) {
        return {
          name: data.option__text,
          count: data.count,
          percentage: data.count === 0 ? 0 : Math.round((data.count / $scope.overall_feedback.feedback_count) * 100),
          color: data.option__color_code
        };
      });
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.overall_rating();
    });

  });

})();