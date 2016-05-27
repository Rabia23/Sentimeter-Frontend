(function() {
  angular.module('livefeed.reports.opportunities')

  .directive('opportunityOptionColor', opportunityOptionColor);

  function opportunityOptionColor() {
    return {
      restrict: 'A',
      scope: {
        color: '='
      },
      link: function(scope, ele, attrs) {
        scope.$watch('color', function(watchedData) {
          if(watchedData !== undefined){
            $(ele).find(".col1").css("border-left", "5px solid "+scope.color);
          }
        });
      }
    };
  }
})();