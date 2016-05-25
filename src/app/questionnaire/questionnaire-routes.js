(function() {
  angular.module( 'livefeed.questionnaire')

  .config(function config( $stateProvider ) {
    $stateProvider
    .state( 'questionnaire', {
      url: '/questionnaire',
      views: {
        "": {
          controller: 'QuestionnaireCtrl',
          templateUrl: 'questionnaire/questionnaire-list/questionnaire.tpl.html'
        }

      },
      authenticate: true
    })

    .state( 'questionnaire_detail', {
      url: '/questionnaire_detail/:questionnaireId',
      views: {
        "": {
          controller: 'QuestionnaireDetailCtrl',
          templateUrl: 'questionnaire/questionnaire-detail/questionnaire-detail.tpl.html'
        }

      },
      authenticate: true
    });

  });

})();
