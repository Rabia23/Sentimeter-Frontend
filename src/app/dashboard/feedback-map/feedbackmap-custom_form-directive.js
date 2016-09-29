(function() {
    angular.module('livefeed.dashboard.feedback_map')

    .directive('mapCustomForm', function(){
      return {
        restrict: 'A',
        scope: {
          data: '='
        },
        link: function(scope, ele, attrs){
          scope.$watch('data', function(watchedData) {
            if(watchedData !== undefined){
              setTimeout(function(){window.initCustomForms();},0.5);
            }

            function blockSameHeight(){
              var elemHolder = $('.map-section .ibox-content').height();
              var header = $('.table-header-holder.add').height();
              var height = elemHolder - header;
              var content = $('.scroller');
              var tableHolder = $('.map-section .table-holder');
              tableHolder.css({'height' : elemHolder});
              content.css({'height' : height});
            }
          });
        }
      };
    });

})();