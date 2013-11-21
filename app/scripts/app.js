'use strict';

angular.module('helloyeomanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'LocalStorageModule'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
