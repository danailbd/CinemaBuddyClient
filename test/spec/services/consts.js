'use strict';

describe('Service: consts', function () {

  // load the service's module
  beforeEach(module('cinemaBuddyClientApp'));

  // instantiate service
  var consts;
  beforeEach(inject(function (_consts_) {
    consts = _consts_;
  }));

  it('should do something', function () {
    expect(!!consts).toBe(true);
  });

});
