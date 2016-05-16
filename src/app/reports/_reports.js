(function() {
  angular.module( 'livefeed.reports', [
    'ui.router',
    'livefeed.reports.api',
    'livefeed.reports.business_segment_breakdown',
    'livefeed.reports.overall_rating',
    'livefeed.reports.opportunities',
    'livefeed.reports.top_concerns',
    'livefeed.reports.regional_analysis',
    'livefeed.reports.age_group_analysis',
    'livefeed.reports.recommendation_likeness',
    'livefeed.reports.benchmark-map'
  ]);
})();
