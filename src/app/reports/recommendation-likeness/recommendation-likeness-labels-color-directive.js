(function() {
  angular.module('livefeed.reports.recommendation_likeness')

  .directive('labelColor', labelColor);

  function labelColor() {
    return {
      restrict: 'A',
      scope: {
        color: '='
      },
      link: function(scope, ele, attrs) {
        scope.$watch('color', function(watchedData) {
          if(watchedData !== undefined){
            $(ele).css("background-color", scope.color);
          }
        });
      }
    };
  }

})();