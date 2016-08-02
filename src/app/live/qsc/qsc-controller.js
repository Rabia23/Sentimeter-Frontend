(function() {
  angular.module( 'livefeed.live.qsc')

  .controller( 'QscCtrl', function QscController( $scope, Global, $rootScope ) {

    var vm = this;
    vm.qscfunc = qscfunc;

    function qscfunc(){
      var qsc = {ambiance: [], service: [], food: []};

      $scope.overall_rating_data = [];
      $scope.qsc_labels = [];

      _.each($scope.overall_ratings[0].data.feedbacks, function(value){
        $scope.qsc_labels.push({option_name: value.option__text, option_class: Global.liveQscClass[value.option__text]});
      });
      $scope.qsc_labels = _.sortBy($scope.qsc_labels, function (value) { return Global.liveQscPriority[value.option_name];});

      _.each($scope.overall_ratings, function(value,index){
        var new_date_array = value.date.split("-");
        var date = new_date_array[2]+"-"+new_date_array[1]+"-"+new_date_array[0].substr(2, 2);
        _.each(value.data.feedbacks, function(item, index2){
          if (item.option__text === 'Ambiance'){
            qsc.ambiance.push(item.count);
          }
          if (item.option__text === 'Service'){
            qsc.service.push(item.count);
          }
          if (item.option__text === 'Food'){
            qsc.food.push(item.count);
          }
        });
        
        $scope.overall_rating_data.push({
          "category": date,
          "column-1": qsc.ambiance[index],
          "column-2": qsc.service[index],
          "column-3": qsc.food[index]
        });
      });
    }

    $rootScope.$on('live-data-received', function (event, data) {
      vm.qscfunc();
    });


  });

})();

