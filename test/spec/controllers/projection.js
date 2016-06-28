'use strict';

describe('Controller: ProjectionCtrl', function () {

  // load the controller's module
  beforeEach(module('cinemaBuddyClientApp'));

  var ProjectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectionCtrl = $controller('ProjectionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectionCtrl.awesomeThings.length).toBe(3);
  });
});
