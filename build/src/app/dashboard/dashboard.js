/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'livefeed.dashboard', [
  'ui.router',
  'chart.js',
  'livefeed.chart',
  'factories', 
  'livefeed.helper',
  'livefeed.dashboard.regional_analysis',
  'livefeed.dashboard.feedback_map',
  'livefeed.dashboard.category_performance_analysis',
  'livefeed.dashboard.overall_rating',
  'livefeed.dashboard.overall_feedback',
  'livefeed.dashboard.statistics',
  'livefeed.dashboard.positive_negative_feedback'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'dashboard', {
    url: '/dashboard',
    views: {
      "": {
        controller: 'DashboardCtrl',
        templateUrl: 'dashboard/dashboard.tpl.html'
      },
      "feedback_map@dashboard":{
        controller: "FeedbackMapCtrl",
        templateUrl: 'dashboard/feedback-map/feedback-map.tpl.html'
      },
      "category_performance_analysis@dashboard":{
        controller: "CategoryPerformanceAnalysisCtrl",
        templateUrl: 'dashboard/category-performance-analysis/category-performance-analysis.tpl.html'
      },
      "regional_analysis@dashboard":{
        controller: "RegionalAnalysisCtrl",
        templateUrl: 'dashboard/regional-analysis/regional-analysis.tpl.html'
      },
      "overall_rating@dashboard":{
        controller: "OverallRatingCtrl",
        templateUrl: 'dashboard/overall-rating/overall-rating.tpl.html'
      },
      "overall_feedback@dashboard":{
        controller: "OverallFeedbackCtrl",
        templateUrl: 'dashboard/overall-feedback/overall-feedback.tpl.html'
      },
      "statistics@dashboard":{
        controller: "StatisticsCtrl",
        templateUrl: 'dashboard/statistics/statistics.tpl.html'
      },
      "positive_negative_feedback@dashboard":{
        controller: "PositiveNegativeFeedbackCtrl",
        templateUrl: 'dashboard/positive-negative-feedback/positive-negative-feedback.tpl.html'
      }

    }
  });

})

/**
 * And of course we define a controller for our route.
 */
.controller( 'DashboardCtrl', function DashboardController( $scope, chartService, _ , $location, $anchorScroll, Filters, Graphs) {

  var regional_analysis_data = Graphs.regional_analysis();
  

});

