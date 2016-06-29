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
    'ngSanitize',
    'angular-oauth2'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl : 'views/main.html',
        controller  : 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/', {
        redirectTo: '/main'
      })
      .when('/about', {
        templateUrl : 'views/about.html',
        controller  : 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl : 'views/login.html',
        controller  : 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/projection', {
        templateUrl : 'views/projection.html',
        controller  : 'ProjectionCtrl',
        controllerAs: 'projection'
      })
      .when('/booking', {
        templateUrl : 'views/booking.html',
        controller  : 'BookingCtrl',
        controllerAs: 'booking'
      })
      .otherwise({
                   redirectTo: '/'
                 })
  })
  .config(
    function ($httpProvider, OAuthProvider) {
      OAuthProvider.configure({
                                baseUrl     : 'http://localhost:8080',
                                clientId    : 'CinemaBuddyClient',
                                clientSecret: '0c8bd89c2e316f7f2245e0',
                                grantPath   : '/oauth2/token',
                                revokePath  : '/oauth2/revoke'
                              });

      $httpProvider.interceptors.push(function ($q, $cookies) {
        return {
          'request': function (config) {

            // Use localStorage
            config.headers['Token'] = $cookies.loginTokenCookie;
            return config;
          }
        };
      });
    })
  .run(
    function ($rootScope, $window, $location, EVENTS, OAuth, AuthService) {
      // Watch auth on path change ...
      $rootScope.$on('$routeChangeStart', function (event,
                                                    next,
                                                    current) {
        if (!AuthService.isAuthenticated()) {
          if (next.$$route.originalPath !== '/login') {
            event.preventDefault();
            /* You can save the user's location to take him back to the same page after he has logged-in */
            $rootScope.savedLocation = $location.url();

            $location.path('/login');
          }
        }
      });

      $rootScope.$on(EVENTS.loginSuccess, function () {
        var location = $location.savedLocation || '/';
        $location.path(location);
      });

      $rootScope.$on('oauth:error', function (event, rejection) {
        // Ignore `invalid_grant` error - should be catched on `LoginController`.
        if ('invalid_grant' === rejection.data.error) {
          return;
        }

        // Refresh token when a `invalid_token` error occurs.
        if ('invalid_token' === rejection.data.error) {
          return OAuth.getRefreshToken();
        }

        // Redirect to `/login` with the `error_reason`.
        return $window.location.href =
          '/login?error_reason=' + rejection.data.error;
      });
    }
  );

