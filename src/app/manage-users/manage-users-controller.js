(function() {
  angular.module( 'livefeed.manage_users')


  .controller( 'ManageUsersCtrl', function ManageUsersCtrl( $scope, $state, $rootScope, Auth, TokenHandler, $uibModal, ManageApi, Enum, flashService) {

    var vm = this;
    vm.get_users_list = get_users_list;

    $scope.show_active_icon = false;
    $scope.show_deactive_icon = false;

    $scope.show_error_message = false;

    $scope.show_loading = true;

    if (Auth.is_logged_in()) {
      $rootScope.show_username = true;
      $rootScope.username = TokenHandler.get_username();
    }

    ManageApi.manage_users().$promise.then(function(data){
      $scope.show_loading = false;
      $scope.show_users = false;
      if(data.success){
        if(data.response.children.length === 0){
            $scope.show_users = true;
        }
        $scope.show_error_message = false;
        $scope.user_list = Enum.get_user_label(data.response.child_role) + "S";
        $rootScope.page_heading = $scope.user_list;
        $scope.users = data.response.children;
        $scope.parent_id = data.response.parent_id;
        $scope.child_role = data.response.child_role;
        if(data.response.parent.branch){
          $scope.branch_id = data.response.parent.branch.id;
        }
        if(data.response.parent.region){
          $scope.region_id = data.response.parent.region.id;
        }
        $scope.grpUsers = [];
        $scope.grpUsers = vm.get_users_list($scope.users);
      }
      else{
        flashService.createFlash(data.message, "danger");
      }

    });


    $scope.disassociate = function(user, index){
      ManageApi.disassociate(user.id).$promise.then(function(data){
        if(data.success){
          var specific_role_data = _.find($scope.grpUsers, function(value){ return value.role == user.role; });
          user = data.response;
          if(user.is_active){
            user.status = "Active";
          }
          else{
            user.status = "Inactive";
          }
          specific_role_data.data[index] = user;
          specific_role_data.data[index].user_role = Enum.get_user_label(user.role);
          message = "User successfully disassociated.";
          flashService.createFlash(message, "success");
        }
        else{
          flashService.createFlash($scope.error_message, "danger");
        }
      });
    };

    $scope.deactivate = function(user,index){
      ManageApi.delete_user(user.id).$promise.then(function(data){
        var message = "";
        if(data.success){
          var specific_role_data = _.find($scope.grpUsers, function(value){ return value.role == user.role; });
          $scope.show_error_message = false;
          if(data.response.is_active === true) {
            message = "User successfully activated.";
            user = data.response;
            user.status = "Active";
            specific_role_data.data[index] = user;
          }
          else {
            message = "User successfully deactivated.";
            user = data.response;
            user.status = "Inactive";
            specific_role_data.data[index] = user;
          }
          specific_role_data.data[index].user_role = Enum.get_user_label(data.response.role);
          flashService.createFlash(message, "success");
          //Flash.dismiss(1);
          specific_role_data.data = _.sortBy(specific_role_data.data, function(item) { return item.is_active; });
          specific_role_data.data = specific_role_data.data.reverse();
        }

        else{
          $scope.show_error_message = true;
          $scope.error_message = data.message;
          flashService.createFlash($scope.error_message, "danger");
        }

      });
    };



    $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        templateUrl: 'manage-users/edit-user-modal.tpl.html',
        controller: 'ModalAddInstanceCtrl',
        size: 600,
        resolve: {
          parent_id: function () {
            return $scope.parent_id;
          },
          child_role: function(){
            return $scope.child_role;
          },
          branch_id: function(){
            return $scope.branch_id;
          },
          region_id: function(){
            return $scope.region_id;
          }
        }
      });
      modalInstance.result.then(function (user) {
        ManageApi.manage_users().$promise.then(function(data){
          if(data.success){
            $scope.show_error_message = false;
            $scope.users = data.response.children;
            $scope.grpUsers = [];
            $scope.grpUsers = vm.get_users_list($scope.users);
          }
          else{
            $scope.show_error_message = true;
            $scope.error_message = data.message;
            flashService.createFlash($scope.error_message, "danger");
          }

        });
      });
    };


    $scope.edit = function (user, index) {
      var editInstance = $uibModal.open({
        templateUrl: 'manage-users/edit-user-modal.tpl.html',
        controller: 'ModalEditInstanceCtrl',
        size: 600,
        resolve: {
          parent_id: function () {
            return $scope.parent_id;
          },
          child_role: function(){
            return $scope.child_role;
          },
          branch_id: function(){
            if($scope.branch_id){
              return $scope.branch_id;
            }
            else if(user.branch){
              return user.branch.id;
            }
          },
          region_id: function(){
            if($scope.region_id){
              return $scope.region_id;
            }
            else if(user.region){
              return user.region.id;
            }

          },
          user: function(){
            return user;
          }
        }
      });

      editInstance.result.then(function (edited_user) {
        var specific_role_data = _.find($scope.grpUsers, function(value){ return value.role == edited_user.role; });
        specific_role_data.data[index] = edited_user;
        specific_role_data.data[index].user_role = Enum.get_user_label(edited_user.role);
        if(specific_role_data.data[index].is_active === true) {
          specific_role_data.data[index].status = "Active";
        }
        else {
          specific_role_data.data[index].status = "Inactive";
        }

      });
    };

    function get_users_list(users){
      var groupUsers = [];
      var grpUsers = _.groupBy(users, 'role');

      Object.keys(grpUsers)
      .sort()
      .reverse()
      .forEach(function(val, i) {
        _.each(grpUsers[val], function(value, index){
          value.user_role = Enum.get_user_label(value.role);
          if(value.is_active){
            value.status = "Active";
          }
          else{
            value.status = "Inactive";
          }
        });
        grpUsers[val] = _.sortBy(grpUsers[val], function(item) { return item.is_active; });
        grpUsers[val] = grpUsers[val].reverse();
        groupUsers.push({role: val, user_role: Enum.get_user_label(val), data: grpUsers[val]});
      });
      return groupUsers;
    }

  });

})();
