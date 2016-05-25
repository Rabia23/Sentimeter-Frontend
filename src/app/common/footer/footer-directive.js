(function() {
  angular.module('livefeed')

  .directive('footer', footer );

  function footer() {
    return {
      restrict: 'A',
      templateUrl: "common/footer/footer.tpl.html",
      replace: true 
    };
  }

  
})();