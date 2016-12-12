(function() {
    'use strict';
    angular.module('ChatsCtrl', [])
        .controller('ChatsCtrl', ChatsCtrl);

    function ChatsCtrl($scope, ChatsService) {
        'ngInject';
        $scope.chats = ChatsService.all();
        $scope.remove = function(chat) {
            ChatsService.remove(chat);
        };
    }

})();
