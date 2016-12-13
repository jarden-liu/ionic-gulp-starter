(function() {
    'use strict';
    angular.module('ChatDetailRouter', [])
        .config(ChatDetailRouter);

    function ChatDetailRouter($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
            'tab-chats': {
              templateUrl: 'chats/chatDetail/chatDetail.html',
              controller: 'ChatDetailCtrl'
            }
          }
        });
    }

})();
