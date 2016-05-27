(function() {
  angular.module( 'livefeed.reports.api', [
    'ngResource',
    'livefeed.api_links'
  ])

  .factory('ReportsApi', ['$resource','apiLinks', Reports]);

  function Reports($resource, apiLinks) {

    function ReportsApi() {
      this.service = $resource(apiLinks.link.api, {},
      {
        report: {method: "GET", isArray: false, params: {endpoint: "report"}}
      });
    }

    ReportsApi.prototype.report = function(date_from, date_to){
      return this.service.report({date_from: date_from, date_to: date_to});
    };
    return new ReportsApi();
  }
})();
