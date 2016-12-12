(function() {
    'use strict';
    angular.module('DashCtrl', [])
        .controller('DashCtrl', DashCtrl);

    function DashCtrl($scope,DashService) {
        'ngInject';
    }

})();
