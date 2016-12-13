(function() {
    'use strict';
    angular.module('TabsRouter', [])
        .config(TabsRouter);

    function TabsRouter($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'tabs/tabs.html',
            controller: 'TabsCtrl'
        });
        $urlRouterProvider.otherwise('/tab/dash');
    }

})();
