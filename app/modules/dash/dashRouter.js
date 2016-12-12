(function() {
    'use strict';
    angular.module('DashRouter', [])
        .config(DashRouter);

    function DashRouter($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'dash/dash.html',
                    controller: 'DashCtrl'
                }
            }
        });
    }

})();
