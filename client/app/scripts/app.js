angular
  .module('swagtasticUI', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $provide, $httpProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });




    $provide.factory('resourceHTTPInterceptor', [
      function () {
        'use strict';

        return {
          request: function (config) {
            config.url = window.decodeURIComponent(config.url);
            return config;
          }
        };
      }
    ]);

    $httpProvider.interceptors.push('resourceHTTPInterceptor');

  });
