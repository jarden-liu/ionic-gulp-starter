(function() {
    'use strict';
    angular.module('DashService', [])
        .service('DashService', DashService);

    function DashService($http) {
      'ngInject';
    }

})();
