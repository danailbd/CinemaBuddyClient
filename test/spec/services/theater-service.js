'use strict';

describe('Service: theaterService', function () {

  // load the service's module
  beforeEach(module('cinemaBuddyClientApp'));

  // instantiate service
  var theaterService;
  beforeEach(inject(function (_theaterService_) {
    theaterService = _theaterService_;
  }));

  it('should do something', function () {
    expect(!!theaterService).toBe(true);
  });

});
