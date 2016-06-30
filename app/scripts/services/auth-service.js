'use strict';

/**
 * @ngdoc service
 * @name cinemaBuddyClientApp.authService
 * @description
 * # authService
 * Factory in the cinemaBuddyClientApp.
 */
angular.module('cinemaBuddyClientApp')
       .factory('AuthService', function ($http, $rootScope, EVENTS) {
         var authService   = {};
         const SESSION_KEY = 'sessionId';
         const ROLE        = 'role';

         authService.sessionKey = SESSION_KEY;
         authService.role = ROLE;

         authService.logout = function () {
           window.localStorage.removeItem(SESSION_KEY);
           window.localStorage.removeItem(ROLE);
           $rootScope.$emit(EVENTS.logoutSuccess);
         };

         authService.login = function (credentials) {
           var data = {
             sessionId: '1',
             role: 'admin'
           };
           window.localStorage.setItem(SESSION_KEY, data.sessionId);
           window.localStorage.setItem(ROLE, data.role);
           $rootScope.$emit(EVENTS.loginSuccess);
         };

         authService.isAuthenticated = function () {
           var session = window.localStorage.getItem(SESSION_KEY);
           return !!session;
         };

         authService.isAuthorized = function (authorizedRoles) {
           if (!angular.isArray(authorizedRoles)) {
             authorizedRoles = [authorizedRoles];
           }
           return (authService.isAuthenticated() &&
           authorizedRoles.indexOf(window.localStorage.getItem(ROLE)) !== -1);
         };

         authService.isAtRole = function (role) {
           return window.localStorage.getItem(ROLE) === role;
         };

         return authService;
       });
