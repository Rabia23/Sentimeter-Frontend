(function() {
  angular.module('livefeed.questionnaire')
  
  .directive('questionSameHeight', questionSameHeight );

  function questionSameHeight() {
    return {
      restrict: 'A',
      scope: {
        questionnaire: '='
      },
      link: function(scope, ele, attrs) {
        scope.$watch('questionnaire', function(watchedData) {
          if (watchedData !== undefined) {
            window.initSameHeight();
          }
        });
      }
    };
  }
})();