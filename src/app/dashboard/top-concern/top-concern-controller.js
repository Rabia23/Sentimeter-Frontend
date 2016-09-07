(function() {
  angular.module('livefeed.dashboard.top_concern')

  .controller( 'TopConcernsCtrl', function TopConcernsCtrl( $rootScope, $scope, Graphs, flashService ) {

    $scope.show_loading = false;
    $scope.show_text = true;
    $scope.today = new Date();
    var vm = this;
    vm.resetDates = resetDates;
    vm.show_concerns = show_concerns;

    vm.resetDates();
    vm.show_concerns();

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
          vm.show_concerns(ev.model.startDate.format('YYYY-MM-DD'), ev.model.endDate.format('YYYY-MM-DD'));
        }
      },
      opens: "left"
    };

    function show_concerns(start_date, end_date){
      $scope.show_text = false;
      Graphs.top_concerns(start_date, end_date).$promise.then(function(data){
        if(data.success) {
          $scope.data = [];
          $scope.all_zero = true;

          $scope.concern_list = data.response.concern_list;

          _.each($scope.concern_list, function (value, index) {
            if (value.weight > 0) {
              $scope.all_zero = false;
            }
          });

          _.each($scope.concern_list, function (value, index) {
            $scope.data.push({"category": value.name, "column-1": value.weight, "color": value.color_code});

          });
          $scope.show_loading = false;
        }
        else{
          flashService.createFlash(data.message, "danger");
        }
      });

      $scope.getConcernsString = function (text_string) {
        $rootScope.$broadcast('handleBroadcast', {text: text_string});
      };
    }

  });
})();