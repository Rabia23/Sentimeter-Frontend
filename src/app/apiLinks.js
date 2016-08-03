angular.module('livefeed.api_links', [])

.service('apiLinks', function($window){

  return {

    link: {
      api: "https://apimcdonaldsqatar.sentimeter.io/api/:endpoint",
      //api: "http://172.16.11.113:8000/api/:endpoint/",
      analytics: function(){
        //return $window.ga('create', 'UA-75485796-1', 'none');
      },
      socket: "wss://ginsoy.sentimeter.io:5679/"
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
