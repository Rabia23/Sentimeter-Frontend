  angular.module('livefeed.overall_feedback.data', []
  )
  .service('overallFeedbackDataService', function(overallFeedbackChartService){
    return {
      getFeedbackData: function(graph_data){
        var rating_data = [];
        _.each(graph_data.response, function(response){
          var obj = {};
          obj["question"] = response.question;
          obj["feedback_count"] = response.feedback_count;
          obj["show_labels"] = response.feedback_count === 0 ? false : true;
          obj["labels"] = _.map(response.feedback, function (value) {
            return {option_name: value.option__text, color: value.option__color_code};
          });
          obj["show_canvas"] = response.feedback_count === 0 ? false : true;
          maximum = _.max(response.feedback, function (data) { return data.count; });
          var bar = {};
          bar = overallFeedbackChartService.getBarChartData(response, maximum.count);
          obj["bar"] = bar;

          rating_data.push(obj);
        });
        return rating_data;
      }
    };
  });
