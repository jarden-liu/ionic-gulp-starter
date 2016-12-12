(function() {
    'use strict';
    angular.module('AccountCtrl', [])
        .controller('AccountCtrl', AccountCtrl);

    function AccountCtrl($scope, AccountService) {
        'ngInject';
        $scope.settings = {
            enableFriends: true
        };
    }

})();
