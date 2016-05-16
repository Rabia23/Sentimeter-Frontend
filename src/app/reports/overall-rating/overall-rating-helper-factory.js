(function() {
  angular.module('livefeed.reports.overall_rating')

  .factory('RatingFactory', function() {

    return {
      RatingOptionClass: {
        "I'm lovin' it": "highlight dark-green",
        "Everything on track": "highlight green",
        "Few concerns": "highlight red",
        "Not happy enough": "highlight dark-red"
      }
    };
  });

})();