(function() {
  angular.module('livefeed.questionnaire')

  .controller( 'QuestionnaireCtrl', QuestionnaireCtrl );

  function QuestionnaireCtrl( $scope, $state, QuestionnaireApi, flashService, $rootScope) {

    $scope.show_loading = true;
    $rootScope.page_heading = "Questionnaires List";
    QuestionnaireApi.questionnaire_list().$promise.then(function(data){
      $scope.show_loading = false;
      if(data.success){
        $scope.questions = data.response;
      }
      else{
        flashService.createFlash(data.message, "danger");
      }
    });

    $scope.detail = function(question_id){
      $state.go("questionnaire_detail", {questionnaireId: question_id});
    };
  
  }

})();