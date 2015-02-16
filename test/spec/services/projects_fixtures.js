'use strict';

describe('Service: projectsFixtures', function () {

  // load the service's module
  beforeEach(module('projectsShowcaseApp'));

  // instantiate service
  var projectsFixtures;
  beforeEach(inject(function (_projectsFixtures_) {
    projectsFixtures = _projectsFixtures_;
  }));

  it('should do something', function () {
    expect(!!projectsFixtures).toBe(true);
  });

});
