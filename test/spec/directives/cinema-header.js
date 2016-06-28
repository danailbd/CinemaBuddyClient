'use strict';

describe('Directive: cinemaHeader', function () {

  // load the directive's module
  beforeEach(module('cinemaBuddyClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cinema-header></cinema-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cinemaHeader directive');
  }));
});
