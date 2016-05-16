(function() {
  angular.module('livefeed.reports.opportunities')

  .factory('OpportunitiesFactory', function() {

    return {
      OpportunitiesOptionClass: {
        "Quality of Food": "highlight quality",
        "Friendly & Courteous Staff": "highlight staff",
        "Clean Restaurant": "highlight clean",
        "Special Promotions": "highlight promotion",
        "Variety in Menu": "highlight menu"
      }
    };
  });

})();