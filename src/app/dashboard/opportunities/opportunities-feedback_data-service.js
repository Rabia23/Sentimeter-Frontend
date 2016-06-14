  angular.module('livefeed.dashboard.opportunities.feedback_data', []
  )
  .service('opportunityFeedbackDataService', function(){
    return {
      getFeedbackData: function(opportunity_data){
        var data = [];
        _.each(opportunity_data.response, function(response, position){
          var object= {};
          object["question"]= response.question;
          object["data"] = _.map(response.feedback, function (data, index) {
            return {
              id: data.option_id,
              name: data.option__text,
              people: data.count,
              percentage: data.count === 0 ? 0 : Math.round((data.count / response.feedback_count) * 100),
              colour: data.option__color_code
            };
          });

          data.push(object);
        });
        return data;
      }
    };
  });
