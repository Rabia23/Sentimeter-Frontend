(function() {
  angular.module('livefeed.reports.regional_analysis')

  .controller( 'ReportsRegionalAnalysisCtrl', function( $scope, $rootScope, PatchStatusEnum) {
    $scope.patches = [];
    $scope.labels = [];

    var vm = this;
    vm.regional_analysis = regional_analysis;
    vm.complaint_analysis = complaint_analysis;
    vm.skip_complaint_action = skip_complaint_action;
    vm.get_complaints_data = get_complaints_data;
    vm.get_complaints_labels = get_complaints_labels;
    vm.get_ratings_labels = get_ratings_labels;
    vm.get_qsc_labels = get_qsc_labels;
    vm.get_qsc_data = get_qsc_data;
    vm.get_ratings_data = get_ratings_data;

    function get_ratings_labels(){

      var rating_labels = [];
      _.each($scope.patch_analysis.analysis[0].question_feedbacks[0].data.feedbacks, function(item, index){
        rating_labels.push({name: item.option__text, class: "item"+('0' + (index+1)).slice(-2)});
      });
      rating_labels.push({name: "Total", class: "total"});
      return rating_labels;
    }

    function get_qsc_labels(){

      var qsc_labels = [];
      _.each($scope.patch_analysis.analysis[1].question_feedbacks[0].data.feedbacks, function(item, index){
        qsc_labels.push({name: item.option__text, class: item.option__text.toLowerCase()});
      });
      qsc_labels.push({name: "Total", class: "total"});
      return qsc_labels;
    }

    function get_qsc_data(){

      _.each($scope.patch_analysis.analysis[1].question_feedbacks, function(patch, index){
        if(patch.object.name == $scope.patches[index].region_name) {
          $scope.patches[index]["qsc_total_count"] = patch.data.feedback_count;
          var analysis = [];
          _.each(patch.data.feedbacks, function(feedback){
            analysis.push({text: feedback.option__text, count: feedback.count});
          });
          $scope.patches[index]["qsc_analysis"] = analysis;
        }
      });
    }

    function get_ratings_data(){

      _.each($scope.patch_analysis.analysis[0].question_feedbacks, function(patch, index){
        if(patch.object.name == $scope.patches[index].region_name) {
          $scope.patches[index]["ratings_total_count"] = patch.data.feedback_count;
          var analysis = [];
          _.each(patch.data.feedbacks, function(feedback){
            analysis.push({text: feedback.option__text, count: feedback.count});
          });
          $scope.patches[index]["rating_analysis"] = analysis;
        }

      });
    }

    function skip_complaint_action(){

      _.each($scope.complaint_view.analysis, function(data){
        var count = 0;
        _.each(data.data.action_analysis,  function(dat) {
          if( dat.action_taken === PatchStatusEnum.get_skip_label_index() ){
            count = count + dat.count;
          }
        });
        data.data.feedback_count = data.data.feedback_count - count;
      });

      _.map($scope.complaint_view.analysis, function(data){
        data.data.action_analysis = _.filter(data.data.action_analysis,  function(dat) {
          return dat.action_taken !== PatchStatusEnum.get_skip_label_index();
        });
      });
    }

    function get_complaints_data(){

      $scope.patches = [];
      _.each($scope.complaint_view.analysis,  function(data, index){
        $scope.patches.push({region_name: data.object.name});
        $scope.patches[index]["complaints_total_count"] = data.data.feedback_count;
        var complaints = [];
        _.each(data.data.action_analysis,  function(dat){
          complaints.push({text: PatchStatusEnum.get_label(dat.action_taken), count: dat.count, action_taken: dat.action_taken});
        });
        $scope.patches[index]["complaint_analysis"] = complaints;
      });
    }

    function get_complaints_labels(){

      $scope.labels = [];
      var complaints_labels = [];
      _.each($scope.patches[0].complaint_analysis, function(item){
        complaints_labels.push({name: item.text, class: item.text.toLowerCase()});
      });
      complaints_labels.push({name: "Total", class: "total"});
      return complaints_labels;
    }

    function complaint_analysis(){

      vm.skip_complaint_action();
      vm.get_complaints_data();
      var complaints_labels = [];
      complaints_labels = vm.get_complaints_labels();
      $scope.labels.push({complaints: complaints_labels});
    }

    function regional_analysis(){

      var rating_labels = [];
      var qsc_labels = [];
      var qsc = [];
      var ratings = [];

      rating_labels = vm.get_ratings_labels();
      $scope.labels[0]["ratings"] = rating_labels;
      qsc_labels = vm.get_qsc_labels();
      $scope.labels[0]["qsc"] = qsc_labels;
      vm.get_qsc_data();
      vm.get_ratings_data();
    }

    $rootScope.$on('report-data-received', function (event, data) {
      vm.complaint_analysis();
      vm.regional_analysis();
    });

  });
})();