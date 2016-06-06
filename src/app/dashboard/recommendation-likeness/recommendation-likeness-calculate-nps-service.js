(function() {
  angular.module('livefeed.dashboard.recommendation_likeness.nps_service',
  [])

  .service('calculateNpsService', function(){

    function get_promoter_score_percentages(promoter_score_array, feedback_count){
      _.each(promoter_score_array, function(item, index){
        promoter_score_array[index].percentage = promoter_score_array[index].count === 0 ? 0: Math.round((promoter_score_array[index].count/feedback_count)*100);
      });
    }

    return {
      getNpsScore: function(data, feedback_count){
        var promoter_score_array = [
          {"name": "Detractors", "text": "(0-6)", "count": 0, "percentage": 0},
          {"name": "Promotors", "text": "(9-10)", "count": 0, "percentage": 0}
        ];
        _.each(data, function(item){
          var value = parseInt(item.option__text, 10);
          if( value > 0 && value < 7 ){
            promoter_score_array[0].count += item.count;
          }
          if(value == 9 || value == 10){
            promoter_score_array[1].count += item.count;
          }
        });
        get_promoter_score_percentages(promoter_score_array, feedback_count);
        return promoter_score_array[1].percentage - promoter_score_array[0].percentage;
      }
    };
  });

})();