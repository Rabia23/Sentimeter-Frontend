(function() {
  angular.module('livefeed.dashboard.top_concern')

  .directive('topConcerns', function($timeout) {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        action: '&'
      },
      link: function(scope, ele, attrs) {
        var chart;
        scope.$watch('data', function(watchedData) {
          if(watchedData !== undefined){
            var data = scope.data;
            chart = AmCharts.makeChart("piechart",
              {
                "type": "pie",
                "pullOutDuration": 0,
                "pullOutRadius": 0,
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span>",
                "innerRadius": "40%",
                "startDuration": 0,
                "color": "#FFF",
                "marginLeft": 12,
                "autoMargins": false,
                "labelText": "[[title]] : [[value]]",
                "labelTickColor" : "#FFF",
                "labelRadius" : 8,
                "labelColorField": "color",
                "titleField": "category",
                "valueField": "column-1",
                "colorField": "color",
                "fontFamily": "'Open Sans', sans-serif;",
                "fontSize": 15,
                "allLabels": [],
                "balloon": {},
                "legend": {},
                "titles": [],
                "dataProvider": data
              });

              $timeout(function () {
                jQuery('.same-height-parent').sameHeight({
                  elements: '.same-height',
                  flexible: true,
                  multiLine: true,
                  biggestHeight: true,
                  useMinHeight: false
                });
              }, 2000);


              $timeout(function () {
                window.initEqualHeight();
              }, 1000);

              chart.addListener("clickSlice", function(event){
                scope.$apply(scope.action({text_string: event.dataItem.dataContext.category}));
              });


          }
        });
      }
    };
  });

})();