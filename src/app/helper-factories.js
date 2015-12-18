angular.module( 'helper_factories', ['ngResource'])

.factory('Global', [ '_', function(_) {

  return {
    mainRatingColorScheme: {
      "Few concerns": '#e73a3a',
      "Not happy enough": '#ac1a1a',
      "Everything is on track!": '#01ad0f',
      "I'm lovin' it": '#0E590A'

    },

    optionsColorScheme: {
      "Quality": '#8e44ad',
      "Service": "#FFc300",
      "Cleanliness": '#3498db'
      
    },

    overallFeedbackClass: {
      "Few concerns": 'neutral',
      "Not happy enough": 'negative',
      "Everything is on track!": 'good',
      "I'm lovin' it": 'v-good'
    },

    categoryPerformanceClass: {
      "Cleanliness": '#3498db',
      "Quality": '#9352ac',
      "Service": '#ffc300'
    },

    segmentationClass: {
      "Cleanliness": 'blue',
      "Quality": 'lilac',
      "Service": 'yellow'
    },

    segmentationPriority: {
      "Late Night": 5,
      "Breakfast": 1,
      "Lunch": 2,
      "Snack": 3,
      "Dinner": 4
    },

    qscPriority: {
      "Cleanliness": 3,
      "Quality": 1,
      "Service": 2
    },

    qscSubCategoriesData:{
      "Cleanliness": {"Flies":{priority: 4, color: "#4A90C0"}, "Lobby Temperature":{priority: 5, color: "#78BEEE"}, "Music":{priority: 6, color: "#B6E1FF"}, "Lobby":{priority: 2, color: "#003565"}, "Rest Rooms":{priority: 3, color: "#1C6292"}, "Employees":{priority: 1, color: "#000737"}},
      "Quality": {"Fries":{priority: 3, color: "#683576"}, "Taste":{priority: 2, color: "#511E5F"}, "Coffee Quality":{priority: 5, color: "#1C002A"}, "Buns Quality":{priority: 4, color: "#A572B3"}, "Ice Cream Quality":{priority: 6, color: "#2B0039"}, "Not Fresh":{priority: 1, color: "#420F50"}},
      "Service": {"Employee Attentiveness":{priority: 1, color: "#B84900"}, "Wrong Order":{priority: 3, color: "#FFA42B"}, "Speed of Service":{priority: 2, color: "#E67700"}, "Missing Order":{priority: 4, color: "#FFD259"}}
    },

    overallFeedbackPriority: {
      "Few concerns": 3,
      "Not happy enough": 4,
      "Everything is on track!": 2,
      "I'm lovin' it": 1
    },

    overallFeedbackColumn:{
      ranges: [_.range(0,15), _.range(15,30), _.range(30, 45), _.range(45, 60), _.range(60, 75), _.range(75,101)]
    },

    childCholorScheme:{
      "Cleanliness": ["#71A6D2", "#4682B4", "#193751", "#314459", "#0F4D92", "#6699CC", "#99BADD", "#0093AF", "#162A40", "#315BA1"],
      "Quality": ["#F984EF", "#460B41", "#BD33A4", "#702963", "#B784A7", "#692D54", "#44012D", "#66023C", "#76395D", "#B784A7"],
      "Service": ["#625119", "#D4AF37", "#FFC901", "#C9B35B", "#7B6608", "#E7BF05", "#F9E663", "#FDE910", "#F8F99C", "#737829"]
    },

    childColor: function(index, parent_color, parent){
      return this.childCholorScheme[parent][index];
    },

    bubbleColor: function(index){
      var colors = ["#BFA66E", "#6881C4", "#C66868", "#AF68C6", "#ECDA32", "#62A1CE", "#6FBD6F", "#EC9B9A", '#6458D4', '#A4D558'];
      return colors[index];
    }

  };

}]);
