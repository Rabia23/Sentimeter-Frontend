(function() {
  angular.module('livefeed')

  .directive('sidebar', sidebar );

  function sidebar() {
    return {
      restrict: 'A',
      templateUrl: "common/sidebar/sidebar.tpl.html",
      replace: true 
    };
  }
  
})();