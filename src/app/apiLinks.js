angular.module('livefeed.api_links', [])

.service('apiLinks', function($window){

  return {

    link: {
      api: "https://stagingapiginsoy.sentimeter.io/api/:endpoint",
      //api: "http://172.16.11.113:8000/api/:endpoint/",
      analytics: function(){
        //return $window.ga('create', 'UA-75485796-1', 'none');
      },
      socket: "wss://apiginsoy.sentimeter.io:5679/live/"
    }
    // link: {
    //   api: "https://apimcdonalds.sentimeter.io/api/:endpoint",
    //   analytics: function(){
    //     return $window.ga('create', 'UA-75485796-1', 'auto');
    //   },
    //   socket: "wss://mcdonalds.sentimeter.io:5679/"
    // }
  };
});
