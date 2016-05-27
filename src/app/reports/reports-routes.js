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
        "regional_analysis@reports":{
          controller: "ReportsRegionalAnalysisCtrl",
          templateUrl: 'reports/regional-analysis/regional-analysis.tpl.html'
        },
        "age_group_analysis@reports":{
          controller: "ReportsAgeGroupAnalysisCtrl",
          templateUrl: 'reports/age-group-analysis/age-group-analysis.tpl.html'
        },
        "benchmark_map@reports":{
          controller: "ReportsBenchmarkMapCtrl",
          templateUrl: 'reports/benchmark-map/benchmark-map.tpl.html'
        },
        "recommendation_likeness@reports":{
          controller: "ReportsRecommendationLikenessCtrl",
          templateUrl: 'reports/recommendation-likeness/recommendation-likeness.tpl.html'
        }

      },
      authenticate: true
    });

  });

})();
