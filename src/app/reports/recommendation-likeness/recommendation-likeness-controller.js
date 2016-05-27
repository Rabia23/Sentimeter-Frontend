(function() {
  angular.module('livefeed.reports.recommendation_likeness')

  .controller( 'ReportsRecommendationLikenessCtrl', ReportsRecommendationLikenessCtrl);

  function ReportsRecommendationLikenessCtrl( $scope, $rootScope) {

    var vm = this;
    vm.recommendation_likeness = recommendation_likeness;

    function recommendation_likeness(){

      $scope.progress_bars = [];
      $scope.progress_bars =  _.map($scope.recommendation_analysis.feedbacks, function(item){
        return {
          percentage: item.count === 0 ? 0: Math.round((item.count/$scope.recommendation_analysis.feedback_count)*100),
          count: item.count
        };
      });
      $scope.promoter_score_array = [{"name": "Detractors", "text": "(0-6)", "count": 0, "percentage": 0}, {"name": "Passives", "text": "(7-8)", "count": 0, "percentage": 0}, {"name": "Promotors", "text": "(9-10)", "count": 0, "percentage": 0}];
      $scope.recommendation_analysis.feedbacks = _.sortBy($scope.recommendation_analysis.feedbacks, function(item){ return parseInt(item.option__text, 10); });

      _.each($scope.recommendation_analysis.feedbacks, function(item){
        var value = parseInt(item.option__text, 10);
        if( value > 0 && value < 7 ){
          $scope.promoter_score_array[0].count = $scope.promoter_score_array[0].count + item.count;
        }
        if(value == 7 || value == 8){
          $scope.promoter_score_array[1].count = $scope.promoter_score_array[1].count + item.count;
        }
        if(value == 9 || value == 10){
          $scope.promoter_score_array[2].count = $scope.promoter_score_array[2].count + item.count;
        }
      });
      $scope.promoter_score_array[0].percentage = $scope.promoter_score_array[0].count === 0 ? 0: Math.round(($scope.promoter_score_array[0].count/$scope.recommendation_analysis.feedback_count)*100);
      $scope.promoter_score_array[1].percentage = $scope.promoter_score_array[1].count === 0 ? 0: Math.round(($scope.promoter_score_array[1].count/$scope.recommendation_analysis.feedback_count)*100);
      $scope.promoter_score_array[2].percentage = $scope.promoter_score_array[2].count === 0 ? 0: Math.round(($scope.promoter_score_array[2].count/$scope.recommendation_analysis.feedback_count)*100);
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.recommendation_likeness();
    });

  }
})();