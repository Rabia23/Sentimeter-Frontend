(function() {
  angular.module( 'livefeed.promotions')

  .config(function config( $stateProvider ) {
    $stateProvider
    .state( 'promotions', {
      url: '/promotions',
      views: {
        "": {
          controller: 'PromotionsCtrl',
          templateUrl: 'promotions/promotions-list/promotions.tpl.html'
        }

      },
      authenticate: true
    })
    .state( 'promotions_detail', {
      url: '/promotions_detail/:promotionId',
      views: {
        "": {
          controller: 'PromotionsDetailCtrl',
          templateUrl: 'promotions/promotions-detail/promotions-detail.tpl.html'
        }

      },
      authenticate: true
    });

  });

})();
