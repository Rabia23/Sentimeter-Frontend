(function() {
  angular.module( 'livefeed.reports')

  .config(function config( $stateProvider ) {
    $stateProvider
    .state( 'reports', {
      url: '/reports',
      views: {
        "": {
          controller: 'ReportsCtrl',
          templateUrl: 'reports/reports.tpl.html'
        },
        "business_segment_breakdown@reports":{
          controller: "ReportsBusinessSegmentBreakDownCtrl",
          templateUrl: 'reports/business-segment-breakdown/business-segment-breakdown.tpl.html'
        },
        "overall_rating@reports":{
          controller: "ReportsOverallRatingCtrl",
          templateUrl: 'reports/overall-rating/overall-rating.tpl.html'
        },
        "opportunities@reports":{
          controller: "ReportsOpportunitiesCtrl",
          templateUrl: 'reports/opportunities/opportunities.tpl.html'
        },
        "top_concerns@reports":{
          controller: "ReportsTopConcernsCtrl",
          templateUrl: 'reports/top-concerns/top-concerns.tpl.html'
        },
        "sidebar@reports":{
          templateUrl: 'common/sidebar.tpl.html'
        },

        "header@reports":{
          templateUrl: 'common/header.tpl.html'
        },

        "footer@reports":{
          templateUrl: 'common/footer.tpl.html'
        }

      },
      authenticate: true
    });

  });

})();
