'use strict';

describe('Service: projectsHelper', function () {

  // load the service's module
  beforeEach(module('projectsShowcaseApp'));

  // instantiate service
  var projectsHelper;
  beforeEach(inject(function (_projectsHelper_) {
    projectsHelper = _projectsHelper_;
  }));

  it('should do something', function () {
    expect(!!projectsHelper).toBe(true);
  });

});
