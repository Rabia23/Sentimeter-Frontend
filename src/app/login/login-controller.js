(function() {
    angular.module('livefeed.login')

    .controller( 'LoginCtrl', function LoginController( $scope,  _ , $rootScope, $state, Authentication, TokenHandler, flashService, Auth) {
      $scope.submitted = false;
      $scope.authenticate = {};
      $scope.show_loading = false;

      $scope.remember_me = false;

      $rootScope.$on('app-online', function(event, args) {
        console.log("online in login");
      });

      $rootScope.$on('app-offline', function(event, args) {
        console.log("offline in login");
      });

      $scope.open_support = function(){
        window.location.href = "mailto:danial.zahid@arbisoft.com?subject=Support&body=message%20goes%20here";
      };

      if(Auth.is_remembered() === "true"){
        var object = TokenHandler.get_login_detail();
        $scope.authenticate.username = object.username;
        $scope.authenticate.password = object.password;
        $scope.remember_me = true;
      }

      $scope.login = function(valid){
        $scope.submitted = true;
        if(valid){
          $scope.show_loading = true;
          Authentication.login($scope.authenticate).$promise.then(function(data){
            $scope.show_loading = false;
            if(data.success){
              $rootScope.token = data.response.token;
              $rootScope.fullname = data.response.user.first_name+" "+data.response.user.last_name;
              TokenHandler.store_token(data.response.token, data.response.user.username, data.response.user.role, data.response.user.first_name+" "+data.response.user.last_name, $scope.remember_me, $scope.authenticate.password);
              $state.go("dashboard");
            }
            else{
              flashService.createFlash(data.message, "danger");
            }

          });
        }
      };

    });
})();
