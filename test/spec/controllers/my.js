'use strict';

describe('Controller: MyCtrl', function () {

  // load the controller's module
  beforeEach(module('cinemaBuddyClientApp'));

  var MyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyCtrl = $controller('MyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyCtrl.awesomeThings.length).toBe(3);
  });
});
