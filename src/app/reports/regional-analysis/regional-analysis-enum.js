(function() {
  angular.module( 'livefeed.reports.regional_analysis')

  .factory('PatchStatusEnum', [PatchStatusEnum]);

  function PatchStatusEnum() {

    var labels = ["Unprocessed", "Unrecoverable", "Recovered", "NAN"];
    return {
      get_label: function(value){
        return labels[value-1];
      },
      get_skip_label_index: function(){
        return labels.indexOf("NAN") + 1;
      }
    };
  }
})();