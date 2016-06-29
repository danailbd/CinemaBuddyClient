'use strict';

/**
 * @ngdoc service
 * @name cinemaBuddyClientApp.EVENTS
 * @description
 * # EVENTS
 * Constant in the cinemaBuddyClientApp.
 */
angular.module('cinemaBuddyClientApp')
  .constant('EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  });
