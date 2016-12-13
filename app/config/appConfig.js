(function() {
    'use strict';
    angular.module('AppConfig', ['envConfig'])
        .config(appConfig);

    function appConfig($urlRouterProvider) {
      'ngInject';

    }

})();
