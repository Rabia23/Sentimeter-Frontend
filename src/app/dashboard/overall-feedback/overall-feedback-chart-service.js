angular.module('livefeed.overall_feedback.chart', []
)
.service('overallFeedbackChartService', function(){
    return {
      getBarChartData: function(graph_data,max){
        return {
            labels : _.map(graph_data.feedback, function(data){return data.option__text;}),
            data: [_.map(graph_data.feedback,  function(data){return data.count;})],
            series: ['Series A'],
            colours : [{fillColor: _.map(graph_data.feedback, function(data){return data.option__color_code;})}],

            options: {
              barShowStroke : false,
              barValueSpacing : 10,
              scaleShowVerticalLines: false,
              customTooltips: false,
              tooltipEvents: ["mousemove", "touchstart", "touchmove"],
              tooltipFillColor: "rgba(0,0,0,0.8)",
              showTooltips: true,
              tooltipTemplate: "<%= value %>",
              scaleOverride: true,
              scaleSteps: 5,
              scaleStepWidth: Math.ceil(max/5)

            }
        };
      }
    };
});
