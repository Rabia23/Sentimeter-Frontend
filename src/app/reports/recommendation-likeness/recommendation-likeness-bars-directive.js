(function() {
  angular.module('livefeed.reports.recommendation_likeness')

  .directive('likenessProgressBarBackground', likenessProgressBarBackground);

  function likenessProgressBarBackground($timeout) {
    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link: function(scope, ele, attrs) {
        scope.$watch('data', function(watchedData) {
          if(watchedData !== undefined){
            $timeout(function(){
              var bars = $(ele).find(".progress-bar");
              _.each(bars, function(value){
                var color = $(value).data("color");
                $(value).css("background-color", color);
              });
            }, 700);
          }
        });
      }
    };
  }

})();