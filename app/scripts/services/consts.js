'use strict';

/**
 * @ngdoc service
 * @name cinemaBuddyClientApp.consts
 * @description
 * # consts
 * Constant in the cinemaBuddyClientApp.
 */
angular.module('cinemaBuddyClientApp')
       .constant('API_PATH', 'http://localhost:8080')
       .constant('USER_ROLES', {
         admin: 'admin',
         simple: 'simple'
       })
       // allow DI for use in controllers, unit tests
       .constant('_', window._)
       // use in views, ng-repeat="x in _.range(3)"
       .run(function ($rootScope) {
         $rootScope._ = window._;
       });
