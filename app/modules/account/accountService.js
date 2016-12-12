(function() {
    'use strict';
    angular.module('AccountService', [])
        .service('AccountService', AccountService);

    function AccountService($http) {
      'ngInject';
    }

})();
