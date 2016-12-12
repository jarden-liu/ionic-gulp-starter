(function() {
    'use strict';
    angular.module('StateChangeStartRun', [])
        .run(stateChangeStartRun);

    function stateChangeStartRun($rootScope) {
        'ngInject';
        $rootScope.$on('$stateChangeStart', function(event, next) {

        });
    }

})();
