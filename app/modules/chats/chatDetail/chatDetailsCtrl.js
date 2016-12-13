(function() {
    'use strict';
    angular.module('ChatDetailCtrl', [])
        .controller('ChatDetailCtrl', ChatDetailCtrl);

    function ChatDetailCtrl($scope, $stateParams, ChatsService) {
        'ngInject';
        $scope.chat = ChatsService.get($stateParams.chatId);
    }

})();
