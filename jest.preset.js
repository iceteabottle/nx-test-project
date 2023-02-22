const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  /**
   * BE AWARE!
   *
   * The following entries are needed to run jest natively (e.g. plugin in IntelliJ) because jest doesn't understand webpack's path aliases.
   * If you've trouble with failing tests ONLY in IntelliJ try to add the path mapping for the corresponding lib.
   *
   * See https://gitlab.com/gitlab-org/gitlab/-/issues/299576
   */
  moduleNameMapper: {
    '@nx-test-project/my-lib/(.*)$': '<rootDir>/../../libs/my-lib/src/$1',
  }
};
