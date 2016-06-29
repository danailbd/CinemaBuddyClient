'use strict';

describe('Service: EVENTS', function () {

  // load the service's module
  beforeEach(module('cinemaBuddyClientApp'));

  // instantiate service
  var EVENTS;
  beforeEach(inject(function (_EVENTS_) {
    EVENTS = _EVENTS_;
  }));

  it('should do something', function () {
    expect(!!EVENTS).toBe(true);
  });

});
