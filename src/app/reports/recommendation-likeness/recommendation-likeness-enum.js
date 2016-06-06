(function() {
  angular.module( 'livefeed.reports.recommendation_likeness')

  .factory('LikenessBarsColors', [LikenessBarsColors]);

  function LikenessBarsColors() {

    var bar_colors = {"Detractors": "#ee2c23", "Passives": "#ff9841", "Promotors": "#b2c74b"};
    return {
      get_bar_color: function(value){
        return bar_colors[value];
      }
    };
  }
})();