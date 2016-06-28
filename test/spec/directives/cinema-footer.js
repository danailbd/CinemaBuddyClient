'use strict';

describe('Directive: cinemaFooter', function () {

  // load the directive's module
  beforeEach(module('cinemaBuddyClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cinema-footer></cinema-footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cinemaFooter directive');
  }));
});
