(function() {
  angular.module( 'livefeed.dashboard.regional_analysis')

  .controller( 'RegionalAnalysisCtrl', function DashboardController( $scope, Graphs, regionalAnalysisChartService, $uibModal, Global, TokenHandler, flashService ) {

    var user_role = TokenHandler.get_user_role();
    $scope.today = new Date();

    var start_date = null;
    var end_date = null;

    $scope.regional_view = true;
    $scope.city_view = false;
    $scope.branch_view = false;

    $scope.region_link = false;
    $scope.city_link = false;
    $scope.branch_link = false;

    $scope.radioModel = 'QSC';

    $scope.show_loading = false;

    $scope.show_string = false;


    function resetDates(){
      $scope.date = {
        startDate: moment().subtract(1, "days"),
        endDate: moment()
      };
    }

    $scope.datePickerOption = {
      eventHandlers: {
        'apply.daterangepicker': function(ev, picker){
          start_date = ev.model.startDate._i;
          end_date =  ev.model.endDate._i;
          if(user_role == 4){
            $scope.showChart("", "regions");
          }
          else if(user_role == 3){
            if($scope.branch_view){
              $scope.showChart("", "branches");
            }
            else{
              $scope.showChart($scope.object_id, $scope.string);
            }
          }
          else{
            $scope.showChart($scope.object_id, $scope.string);
          }
        }
      },
      opens: "left"
    };

    function showString(data_count){
      $scope.show_string = data_count === 0 || data_count === undefined? true:false;
    }

    function getAreaRegions(){
      $scope.question_type = ($scope.radioModel === 'Rating') ? 1 : 2;
      $scope.show_loading = true;
      $scope.donut_regions_data = [];
      var type_id;
      if($scope.radioModel === 'Complaints'){
        type_id = user_role == 4 ? "" : 1;
        Graphs.action_analysis(type_id, "", "", start_date, end_date, "").$promise.then(function(complains_data){
          if(complains_data.success) {
            showString(complains_data.response.count);
            $scope.donut_regions_data = regionalAnalysisChartService.getComplaintsDonutChartData(complains_data.response);
            $scope.show_loading = false;
          }
          else{
            flashService.createFlash(complains_data.message, "danger");
          }
        });
      }
      else {
        type_id = user_role == 4 ? "" : 1;
        Graphs.regional_analysis($scope.question_type, start_date, end_date, type_id, "").$promise.then(function(data){
          if(data.success) {
            showString(data.response.count);
            $scope.donut_regions_data = regionalAnalysisChartService.getDonutChartData(data.response, $scope.question_type);
            $scope.show_loading = false;
          }
          else{
            flashService.createFlash(data.message, "danger");
          }
        });
      }
    }

    function getRegionCities(region){
      $scope.question_type = ($scope.radioModel === 'Rating') ? 1 : 2;
      $scope.selected_region = region;
      $scope.area_view = false;
      $scope.regional_view = false;
      $scope.city_view = true;
      $scope.region_link = true;
      $scope.city_link = false;
      $scope.branch_link = false;
      $scope.show_loading = true;
      $scope.donut_cities_data = [];
      if($scope.radioModel === 'Complaints'){
        Graphs.action_analysis(2, region.id, "", start_date, end_date,"").$promise.then(function(complains_data){
          if(complains_data.success) {
            showString(complains_data.response.count);
            $scope.donut_cities_data = regionalAnalysisChartService.getComplaintsDonutChartData(complains_data.response);
            $scope.show_loading = false;
          }
          else{
            flashService.createFlash(complains_data.message, "danger");
          }
        });
      }
      else {
        Graphs.city_analysis(region.id, $scope.question_type, start_date, end_date, 2).$promise.then(function(data){
          if(data.success) {
            showString(data.response.count);
            $scope.donut_cities_data = regionalAnalysisChartService.getDonutChartData(data.response, $scope.question_type);
            $scope.show_loading = false;
          }
          else{
            flashService.createFlash(data.message, "danger");
          }
        });
      }
    }

    function getCityBranches(city){
      $scope.question_type = ($scope.radioModel === 'Rating') ? 1 : 2;
      $scope.selected_city = city;
      $scope.area_view = false;
      $scope.regional_view = false;
      $scope.city_view = false;
      $scope.branch_view = true;
      $scope.region_link = user_role == 3 ? false : true;
      $scope.city_link = user_role == 3 ? false : true;
      $scope.branch_link = false;
      $scope.show_loading = true;
      $scope.donut_branches_data = [];
      var type_id;
      if($scope.radioModel === 'Complaints'){
        type_id = user_role == 3 ? "" : 3;
        Graphs.action_analysis(type_id, "", city.id, start_date, end_date, "").$promise.then(function(complains_data){
          if(complains_data.success) {
            showString(complains_data.response.count);
            $scope.donut_branches_data = regionalAnalysisChartService.getComplaintsDonutChartData(complains_data.response);
            $scope.show_loading = false;
          }
          else{
            flashService.createFlash(complains_data.message, "danger");
          }
        });
      }
      else {
        type_id = user_role == 3 ? "" : 3;
        Graphs.branch_analysis(city.id, $scope.question_type, start_date, end_date, type_id).$promise.then(function (data) {
          if(data.success) {
            showString(data.response.count);
            $scope.donut_branches_data = regionalAnalysisChartService.getDonutChartData(data.response, $scope.question_type);
            $scope.show_loading = false;
          }
          else{
            flashService.createFlash(data.message, "danger");
          }
        });
      }
    }

    function getBranchTables(branch){
      $scope.question_type = ($scope.radioModel === 'Rating') ? 1 : 2;
      $scope.selected_branch = branch;
      $scope.area_view = false;
      $scope.regional_view = false;
      $scope.city_view = false;
      $scope.branch_view = false;
      $scope.region_link = user_role == 3 ? false : true;
      $scope.city_link = user_role == 3 ? false : true;
      $scope.branch_link = true;
      $scope.show_loading = true;
      $scope.donut_tables_data = [];
      var type_id;
      if($scope.radioModel === 'Complaints'){
        $scope.show_loading = false;
        $scope.show_string = true;
      }
      else {
        type_id = 4;
        Graphs.table_analysis(branch.id, $scope.question_type, start_date, end_date, type_id).$promise.then(function (data) {
          if(data.success) {
            showString(data.response.count);
            $scope.donut_tables_data = regionalAnalysisChartService.getDonutChartData(data.response, $scope.question_type, type_id);
            $scope.show_loading = false;
          }
          else{
            flashService.createFlash(data.message, "danger");
          }
        });
      }
    }

    $scope.backToRegions = function(){

      $scope.question_type = ($scope.radioModel === 'Rating') ? 1 : 2;
      $scope.selected_region = null;
      $scope.regional_view = true;
      $scope.city_view = false;
      $scope.region_link = false;
      $scope.city_link = false;
      $scope.branch_link = false;
      $scope.donut_cities_data = [];
      $scope.showChart(null, 'regions');
    };

    $scope.backToCities = function(region){

      $scope.selected_city = null;
      $scope.city_view = true;
      $scope.regional_view = false;
      $scope.region_link = true;
      $scope.city_link = false;
      $scope.branch_link = false;
      $scope.donut_branches_data = [];
      $scope.showChart(region, 'cities');
    };

    $scope.backToBranches = function(city){

      $scope.selected_branch = null;
      $scope.city_view = false;
      $scope.regional_view = false;
      $scope.branch_view = true;
      $scope.region_link = user_role == 3 ? false : true;
      $scope.city_link = user_role == 3 ? false : true;
      $scope.branch_link = false;
      $scope.donut_tables_data = [];
      $scope.showChart(city, 'branches');
    };

    function showTitle(radioModel){
      if(radioModel === 'Rating'){
        $scope.title = 'Feedback Analysis';
      }
      else if(radioModel === 'QSC'){
        $scope.title = 'KIP Analysis';
      }
      else if(radioModel === 'Complaints'){
        $scope.title = 'Complaint Analysis';
      }
    }

    $scope.showChart = function(object_id, string){

      showTitle($scope.radioModel);
      $scope.object_id = object_id;
      $scope.string = string;

      if(string === 'regions'){
        if($scope.regional_view){
          getAreaRegions();
        }
        else if($scope.city_view){
          getRegionCities($scope.selected_region);
        }
        else if($scope.branch_view){
          getCityBranches($scope.selected_city);
        }
        else{
          getBranchTables($scope.selected_branch);
        }
      }
      else if(string === 'cities'){
        getRegionCities(object_id);
      }
      else if(string === 'branches'){
        getCityBranches(object_id);
      }
      else{
        getBranchTables(object_id);
      }

    };
    if(user_role == 4){
      showTitle($scope.radioModel);
      getAreaRegions("");
    }
    else if(user_role == 3){
      showTitle($scope.radioModel);
      getCityBranches("");
    }
    else {
      $scope.showChart(null, 'regions');
    }

    $scope.open = function(option, area, region, city, branch){
      if (!area){ area = null;}
      if (!region){ region = null;}
      if (!city){ city = null;}
      if (!branch){ branch = null;}
      if($scope.radioModel === 'QSC'){
        var modalInstance = $uibModal.open({
          templateUrl: 'dashboard/regional-analysis/sqc-modal.tpl.html',
          controller: 'SQCModalCtrl',
          size: 1000,
          resolve: {
            area: function () {return area;},
            region: function () {return region;},
            city: function () {return city;},
            branch: function () {return branch;},
            option: function() {return option;},
            start_date: function() {return start_date;},
            end_date: function() {return end_date;}
          }
        });
      }
    };

    resetDates();
  });

})();
