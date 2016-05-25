(function() {
  angular.module( 'livefeed.manage_users')

  .config(function config( $stateProvider ) {
    $stateProvider
    .state( 'users', {
      url: '/users',
      views: {
        "": {
          controller: 'ManageUsersCtrl',
          templateUrl: 'manage-users/manage-users.tpl.html'
        }

      },
      authenticate: true
    });

  });

})();
