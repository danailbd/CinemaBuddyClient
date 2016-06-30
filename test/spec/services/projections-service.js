'use strict';

describe('Service: projectionsService', function () {

  // load the service's module
  beforeEach(module('cinemaBuddyClientApp'));

  // instantiate service
  var projectionsService;
  beforeEach(inject(function (_projectionsService_) {
    projectionsService = _projectionsService_;
  }));

  it('should do something', function () {
    expect(!!projectionsService).toBe(true);
  });

});
