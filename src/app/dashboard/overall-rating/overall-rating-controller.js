(function() {
    angular.module('livefeed.dashboard.overall_rating')

    .controller( 'TimeLineCtrl', function DashboardController( $scope, overallRatingChartService, Graphs, Global, flashService ) {
       var height = 0;
       var width = 0;

       $(window).resize( function(){
         height = $(window).height();
         width = $(window).width();
         if($scope.mainView === false && $scope.optionView === true){
            $scope.labelClick($scope.option);
         }
         else if($scope.mainView === false && $scope.optionView === false){
            $scope.optionClick($scope.option_object);
         }
         else {
             mainRating();
         }

       }).resize();

       $scope.today = new Date();

       function resetDates(){
        $scope.date = {
            startDate: moment().subtract(6, "days"),
            endDate: moment()
        };
      }

      $scope.datePickerOption = {
        eventHandlers: {
          'apply.daterangepicker': function(ev, picker){
            $scope.show_loading = true;
            $scope.type = "1";
            if($scope.mainView){
              $scope.start_date = ev.model.startDate._i;
              $scope.end_date = ev.model.endDate._i;
              mainRating();
            }

          },
          'cancel.daterangepicker': function(ev, picker){
            //resetDates();
          }
        },
        opens: "left"
      };

       $scope.start_date = null;
       $scope.end_date = null;

       $scope.type = "1";
       $scope.mainView = true;
       $scope.optionView = false;

       $scope.page = 1;
       $scope.max_page = 1;

       function calculate_data_sets(data, value){
         $scope.data_array = [];
         if (data.response.length > value) {
           var sets = data.response.length / value;
           while (data.response.length > 0) {
             $scope.data_array.push(data.response.splice(0, value));
           }
         }
         else {
           $scope.data_array[0] = data.response;
         }
         $scope.max_page = $scope.data_array.length;
       }

       function drawGraph(data){
         $scope.overall_rating_data = [];
         var timeline_data = overallRatingChartService.getAreaChart(data);
         $scope.overall_rating_data = [$scope.labels, timeline_data];
       }

       function calculate_labels(feedbacks){
         $scope.labels = _.map(feedbacks, function (value, index) {
             return {
                 option_id: value.option_id,
                 option_name: value.option__text,
                 parent_id: value.option__parent_id,
                 color: Global.optionsColorScheme[value.option__text],
                 priority: Global.qscPriority[value.option__text],
                 lineColor: Global.optionsLineColorScheme[value.option__text],
                 title: value.option__text,
                 id: "column-" + Global.qscPriority[value.option__text] + "-id",
                 valueField: "column-" + Global.qscPriority[value.option__text]
             };
         });
         $scope.labels = _.sortBy($scope.labels, function (value) {
             return value.priority;
         });
       }

       function drawLabelGraph(data){
         $scope.overall_rating_data = [];
         var label_data =  overallRatingChartService.getAreaLabelChart(data);
         $scope.overall_rating_data = [$scope.labels, label_data];
       }

       function calculate_option_labels(feedbacks){
         $scope.labels = _.map(feedbacks ,function(value, index){
            return {
               option_id: value.option_id,
               option_name: value.option__text,
               parent_id: value.option__parent_id,
               color: Global.subOptionsColorScheme[value.option__text].color,
               lineColor: Global.subOptionsColorScheme[value.option__text].color,
               priority:  Global.subOptionsColorScheme[value.option__text].priority,
               title: value.option__text,
               id: "column-"+(index+1)+"-id",
               valueField: "column-"+(index+1)
            };
         });
         $scope.labels = _.sortBy($scope.labels, function (value) {
             return value.priority;
         });
       }
       function mainRating() {

           $scope.mainView = true;
           $scope.show_loading = true;
           $scope.optionView = false;
           Graphs.overall_rating(null, $scope.start_date, $scope.end_date).$promise.then(function (data) {
             if(data.success) {
               if(width < height) {
                  console.log("main rating");
                  console.log("potrait");
                  calculate_data_sets(data, 3);
               }
               else {
                   console.log("main rating");
                   console.log("landscape");
                   calculate_data_sets(data, 7);
               }
               calculate_labels($scope.data_array[0][0].data.feedbacks);
               $scope.page = 1;
               drawGraph($scope.data_array[0]);
               $scope.show_loading = false;
             }
             else{
               flashService.createFlash(data.message, "danger");
             }
           });
       }

       $scope.labelClick = function(option){
          $scope.option = option;
          if(option.parent_id == null){
            $scope.show_loading = true;
            $scope.optionView = true;
            Graphs.overall_rating(option.option_id, $scope.start_date, $scope.end_date).$promise.then(function(data) {
              if(data.success) {
                $scope.mainView = false;
                if(width < height)  {
                  console.log("label click");
                  console.log("potrait");
                  calculate_data_sets(data, 3);
                }
                else {
                  console.log("label click");
                  console.log("landscape");
                  calculate_data_sets(data, 7);
                }
                calculate_option_labels($scope.data_array[0][0].data.feedbacks);
                $scope.page = 1;
                drawLabelGraph($scope.data_array[0]);
                $scope.show_loading = false;
              }
              else {
                flashService.createFlash(data.message, "danger");
              }
            });
          }
       };

        function drawOptionGraph(data){
         $scope.overall_rating_data = [];
         $scope.overall_rating_data = [$scope.labels, data];
       }

       $scope.optionClick = function (option_object){
         $scope.option_object = option_object;
         var option_id = option_object.item.dataContext[option_object.graph.id];
         var date = option_object.item.category;
         if(option_id !== undefined) {
           $scope.show_loading = true;

           Graphs.feedback_segmentation(date, option_id, $scope.type).$promise.then(function (data) {
             $scope.show_loading = false;
             if (data.success) {
                $scope.mainView = false;
                $scope.optionView = false;
                if (data.response.options !== undefined) {
                  $scope.labels = _.map(data.response.options, function (value, index) {
                    return {
                      option_name: value.option__text,
                      parent_id: "",
                      color: Global.subOptionsColorScheme[value.option__text].color,
                      lineColor: Global.subOptionsColorScheme[value.option__text].color,
                      priority:  Global.subOptionsColorScheme[value.option__text].priority,
                      title: value.option__text,
                      id: "column-" + (index + 1) + "-id",
                      valueField: "column-" + (index + 1)
                    };
                  });
                  $scope.labels = _.sortBy($scope.labels, function (value) {
                     return value.priority;
                  });
                  var qsc_suboptions_data;
                  $scope.segments_data_array = [];
                  $scope.page = 1;
                  $scope.max_page = 1;
                  qsc_suboptions_data = overallRatingChartService.getAreaSegmentChart(data.response.options);
                  if(width < height) {
                    console.log("option click");
                    console.log("potrait");
                    while (qsc_suboptions_data.length > 0) {
                      $scope.segments_data_array.push(qsc_suboptions_data.splice(0, 3));
                    }
                    $scope.max_page = $scope.segments_data_array.length;
                    drawOptionGraph($scope.segments_data_array[0]);
                  }
                  else {
                    drawOptionGraph(qsc_suboptions_data);
                  }
                }
             }
             else {
               flashService.createFlash(data.message, "danger");
             }
           });
         }
       };


       $scope.axisChanged = function(){
         $scope.show_loading = true;
         mainRating();
       };

       $scope.Next = function(){
         if($scope.page < $scope.max_page){
           $scope.page = $scope.page + 1;
           drawGraph($scope.data_array[($scope.page -1 )]);
         }
       };

       $scope.labelNext = function(){
         if($scope.page < $scope.max_page){
           $scope.page = $scope.page + 1;
           drawLabelGraph($scope.data_array[($scope.page -1 )]);
         }
       };
       $scope.optionNext = function(){
         if($scope.page < $scope.max_page){
           $scope.page = $scope.page + 1;
           drawOptionGraph($scope.segments_data_array[($scope.page -1 )]);
         }
       };

       $scope.backToMain = function() {
         mainRating();
       };

       $scope.Prev = function(){
         if($scope.page > 1){
           $scope.page = $scope.page - 1;
           drawGraph($scope.data_array[($scope.page -1 )]);
         }
       };

       $scope.labelPrev = function(){
         if($scope.page > 1){
           $scope.page = $scope.page - 1;
           drawLabelGraph($scope.data_array[($scope.page -1 )]);
         }
       };
       $scope.optionPrev = function(){
         if($scope.page > 1){
           $scope.page = $scope.page - 1;
           drawOptionGraph($scope.segments_data_array[($scope.page -1 )]);
         }
       };

       resetDates();
       //mainRating();
    });
})();