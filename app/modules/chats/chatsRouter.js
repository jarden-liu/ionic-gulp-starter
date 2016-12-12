(function() {
    'use strict';
    angular.module('ChatsRouter', [])
        .config(ChatsRouter);

    function ChatsRouter($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'chats/chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        });
    }

})();
