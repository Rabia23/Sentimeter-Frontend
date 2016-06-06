(function() {
  angular.module('livefeed.dashboard.recommendation_likeness')

  .controller( 'RecommendationLikenessCtrl', function ( $scope, flashService, RecommendationLikenessApi, calculateNpsService) {

    $scope.today = new Date();
    $scope.show_loading = true;

    var start_date = null;
    var end_date = null;

    var vm = this;
    vm.resetDates = resetDates;
    vm.draw_recommendation_likeness = draw_recommendation_likeness;

    vm.resetDates();
    vm.draw_recommendation_likeness();

    function resetDates(){
      $scope.date = {
          startDate: moment().subtract(1, "days"),
          endDate: moment()
      };
    }

    $scope.datePickerOption = {
      eventHandlers: {
        'apply.daterangepicker': function(ev, picker){

          $scope.show_loading = true;
          start_date = ev.model.startDate._i;
          end_date =  ev.model.endDate._i;
          draw_recommendation_likeness();
        }
      },
      opens: "left"
    };

    function draw_recommendation_likeness(region_id, city_id, branch_id){
      RecommendationLikenessApi.recommendation_analysis(region_id, city_id, branch_id, start_date, end_date).$promise.then(function (data) {
        $scope.feedback_count = 0;
        $scope.show_loading = false;
        if(data.success) {
          $scope.recommendation_likeness_data = [];
          $scope.feedback_count = data.response.feedback_count;
          $scope.total_average = 0;

          _.each(data.response.feedbacks, function(data){
            $scope.recommendation_likeness_data.push({
              "category": data.option__text,
              "column-1": data.count,
              "color": data.count === 0? "": data.option__color_code,
              "percentage": data.count === 0 ? 0: Math.round((data.count/$scope.feedback_count)*100)
            });
          });

          $scope.recommendation_likeness_data = _.sortBy($scope.recommendation_likeness_data, function(item){ return parseInt(item.category, 10); });
          $scope.nps_score = calculateNpsService.getNpsScore(data.response.feedbacks, data.response.feedback_count);
        }
        else{

          flashService.createFlash(data.message, "danger");
        }
      });

    }

  });
})();