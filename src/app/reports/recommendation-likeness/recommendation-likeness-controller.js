(function() {
  angular.module('livefeed.reports.recommendation_likeness')

  .controller( 'ReportsRecommendationLikenessCtrl', ReportsRecommendationLikenessCtrl);

  function ReportsRecommendationLikenessCtrl( $scope, $rootScope, LikenessBarsColors) {

    var vm = this;
    vm.recommendation_likeness = recommendation_likeness;

    function get_nps_score_count(){
      $scope.nps_score = $scope.promoter_score_array[2].percentage - $scope.promoter_score_array[0].percentage;
    }

    function get_promoter_score_percentages(){

      _.each($scope.promoter_score_array, function(item, index){
        $scope.promoter_score_array[index].percentage = $scope.promoter_score_array[index].count === 0 ? 0: Math.round(($scope.promoter_score_array[index].count/$scope.recommendation_analysis.feedback_count)*100);
      });
    }

    function get_promoter_score_colors(){

      _.each($scope.promoter_score_array, function(item, index){
        $scope.promoter_score_array[index]["color"] = LikenessBarsColors.get_bar_color(item.name);
      });
    }

    function recommendation_likeness(){

      $scope.promoter_score_array = [
        {"name": "Detractors", "text": "(0-6)", "count": 0, "percentage": 0},
        {"name": "Passives", "text": "(7-8)", "count": 0, "percentage": 0},
        {"name": "Promotors", "text": "(9-10)", "count": 0, "percentage": 0}
      ];
      $scope.recommendation_analysis.feedbacks = _.sortBy($scope.recommendation_analysis.feedbacks, function(item){ return parseInt(item.option__text, 10); });

      $scope.progress_bars = [];
      $scope.progress_bars =  _.map($scope.recommendation_analysis.feedbacks, function(item){
        return {
          percentage: item.count === 0 ? 0: Math.round((item.count/$scope.recommendation_analysis.feedback_count)*100),
          count: item.count,
          color: item.count === 0? "": item.option__color_code
        };
      });

      _.each($scope.recommendation_analysis.feedbacks, function(item){
        var value = parseInt(item.option__text, 10);
        if( value > 0 && value < 7 ){
          $scope.promoter_score_array[0].count += item.count;
        }
        if(value == 7 || value == 8){
          $scope.promoter_score_array[1].count += item.count;
        }
        if(value == 9 || value == 10){
          $scope.promoter_score_array[2].count += item.count;
        }
      });

      get_promoter_score_percentages();
      get_promoter_score_colors();
      get_nps_score_count();

    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.recommendation_likeness();
    });

  }
})();