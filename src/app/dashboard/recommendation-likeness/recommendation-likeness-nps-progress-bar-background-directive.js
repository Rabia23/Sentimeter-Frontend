(function() {
  angular.module('livefeed.dashboard.recommendation_likeness')

  .directive('npsProgressBarBackground', NpsProgressBarBackground);

  function NpsProgressBarBackground($timeout) {
    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link: function(scope, ele, attrs) {
        scope.$watch('data', function(watchedData) {
          if(watchedData !== undefined){
            var data = scope.data;
            $timeout(function(){
              var bars = $(ele).find(".progress-bar");
              _.each(bars, function(value, index){
                $(value).css("background-color", data[index].color);
              });
            }, 700);
          }
        });
      }
    };
  }

})();