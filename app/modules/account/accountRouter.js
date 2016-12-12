(function() {
    'use strict';
    angular.module('AccountRouter', [])
        .config(AccountRouter);

    function AccountRouter($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'account/account.html',
                    controller: 'AccountCtrl'
                }
            }
        });
    }

})();
