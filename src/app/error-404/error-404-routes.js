(function() {
  angular.module( 'livefeed.error_404')

  .config( config );

  function config( $stateProvider ) {
    $stateProvider
    .state( 'error_404', {
      url: '/404',
      views: {
        "": {
          templateUrl: 'error-404/error-404.tpl.html'
        }
      },
      authenticate: false
    });
  }
})();