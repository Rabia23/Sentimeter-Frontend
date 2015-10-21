angular.module( 'livefeed', [
  'templates-app',
  'templates-common',
  'livefeed.dashboard',
  'ui.router',
  'parse-angular',
  'parse-angular.enhance',
  'livefeed.chart'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/dashboard' );
})

.constant('_',
    window._
)

.run( function run () {
  Parse.initialize("Xko6uCPfXVY6jSBwt3klu39eXKs3dZI6QKz94Y9s", "XT9qGnhCUaFTOVumUNPxo5PPnvMwNHWeyi6WEloF");
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $rootScope ) {
  $rootScope.main = {
    brand: "LiveFeed"
  };
})

;

