(function() {
  angular.module( 'livefeed.how_to')

  .config(function config( $stateProvider ) {
    $stateProvider
    .state( 'how_to', {
      url: '/how_to',
      views: {
        "": {
          controller: 'HowToCtrl',
          templateUrl: 'how-to/how-to.tpl.html'
        }
      }
    });
  });
})();
