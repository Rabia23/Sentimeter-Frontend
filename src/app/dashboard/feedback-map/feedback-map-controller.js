(function() {
    angular.module('livefeed.dashboard.feedback_map')

    .controller( 'FeedbackMapCtrl', function FeedbackMapController( $scope, Graphs, mapService, flashService ) {

      $scope.today = new Date();
      $scope.show_loading = true;
      $scope.zoom = 5;

      var vm = this;
      vm.resetDates = resetDates;
      vm.draw_map = draw_map;

      vm.resetDates();
      vm.draw_map();

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
            vm.draw_map(ev.model.startDate._i, ev.model.endDate._i);
          }
        },
        opens: "left"
      };

      function draw_map(start_date,end_date ){
        Graphs.map_view(start_date, end_date).$promise.then(function(data){
          if(data.success) {
            $scope.map_data = [];
            $scope.map_data = data.response.branches;
            $scope.show_loading = false;
          }
          else{
            flashService.createFlash(data.message, "danger");
          }
        });
      }

    });
})();