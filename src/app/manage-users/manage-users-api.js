angular.module( 'livefeed.manage_users.api', [
  'ngResource',
  'livefeed.api_links',
  'livefeed.authService'
])

.factory('ManageApi', ['$resource','apiLinks','TokenHandler','$rootScope', function($resource, apiLinks, TokenHandler, $rootScope) {



  function ManageApi() {
    this.service = $resource(apiLinks.link.api, {},
                  {
                    manage_users: {method: "GET",isArray: false, params: {endpoint: "manage_user"}},
                    add_user: {method: "POST",isArray: false, params: {endpoint: "user/"}},
                    edit_user: {method: "PUT",isArray: false, params: {endpoint: "user/"}},
                    delete_user: {method: "DELETE", isArray: false, params:{endpoint: "user/"}},
                    disassociate: {method: "GET", isArray: false, params: {endpoint: "disassociate"}}
                 });
  }
  ManageApi.prototype.manage_users = function(){
    var token = $rootScope.token || TokenHandler.get_token();
    return this.service.manage_users({token: token});
  };
  ManageApi.prototype.delete_user = function(user_id){
    var token = $rootScope.token || TokenHandler.get_token();
    return this.service.delete_user({id: user_id, token: token});
  };
  ManageApi.prototype.disassociate = function(user_id){
    var token = $rootScope.token || TokenHandler.get_token();
    return this.service.disassociate({id: user_id, token: token});
  };
  ManageApi.prototype.edit_user = function(user){
    var token = $rootScope.token || TokenHandler.get_token();
    var user_json = {first_name: user.first_name, last_name: user.last_name, email: user.email, phone_no: user.phone_no, id: user.id, token: token};

    if(user.password){
      user_json.new_password = user.password;
    }
    if(user.role == 4 && !user.region){
      user_json.region_id = user.region_id;
    }
    if((user.role == 2 || user.role == 3) && !user.branch){
      user_json.branch_id = user.branch_id;
    }
    return this.service.edit_user(user_json);
  };
  ManageApi.prototype.add_user = function(user){
    var token = $rootScope.token || TokenHandler.get_token();
    var user_json = {first_name: user.first_name, last_name: user.last_name, username: user.username,
       password: user.password, email: user.email, phone_no: user.phone_no, role: user.role, parent_id: user.parent_id, token: token};
    if(user.role == 4){
      user_json.region_id = user.region_id;
    }
    if(user.role == 2 || user.role == 3){
      user_json.branch_id = user.branch_id;
    }
    return this.service.add_user(user_json);
  };
  return new ManageApi();
}]);
