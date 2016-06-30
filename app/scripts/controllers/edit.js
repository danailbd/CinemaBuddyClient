'use strict';

/**
 * @ngdoc function
 * @name cinemaBuddyClientApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the cinemaBuddyClientApp
 */
angular.module('cinemaBuddyClientApp')
  .controller('EditCtrl', function ($scope, theaterService, moviesService, projectionsService) {
    $scope.item = {};
    $scope.menu = ['Projection', 'Movie', 'Theater'];

    $scope.selected = null;

    $scope.clean = function () {
      console.log($scope.selected);
      $scope.item = {};
    };
    
    $scope.isItemSelected = function (item) {
      return $scope.selected === item;
    };

    $scope.saveItem = function () {
      // By selected
      var addServ;
      if ($scope.selected  === 'Theater') {
        addServ = theaterService.add;
      }
      
      addServ($scope.item);
    };
  });
