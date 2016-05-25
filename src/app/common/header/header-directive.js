(function() {
  angular.module('livefeed')

  .directive('header', header );

  function header() {
    return {
      restrict: 'A',
      templateUrl: "common/header/header.tpl.html",
      replace: true
    };
  }

})();