'use strict';

describe('Service: theater', function () {

  // load the service's module
  beforeEach(module('cinemaBuddyClientApp'));

  // instantiate service
  var theater;
  beforeEach(inject(function (_theater_) {
    theater = _theater_;
  }));

  it('should do something', function () {
    expect(!!theater).toBe(true);
  });

});
