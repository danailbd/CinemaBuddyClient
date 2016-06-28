'use strict';

/**
 * @ngdoc overview
 * @name cinameBuddyApp
 * @description
 * # cinameBuddyApp
 *
 * Main module of the application.
 */
angular
  .module('cinemaBuddyClientApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'views/main.html',
        controller  : 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl : 'views/about.html',
        controller  : 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
                   redirectTo: '/'
                 })
  });

