(function() {
  angular.module( 'livefeed.reports', [
    'ui.router',
    'livefeed.reports.api',
    'livefeed.reports.business_segment_breakdown',
    'livefeed.reports.overall_rating',
    'livefeed.reports.opportunities',
    'livefeed.reports.top_concerns'
  ]);
})();
