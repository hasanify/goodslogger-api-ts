/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  verbose: true,
  forceExit: true,
  coverageReporters: ['html'],
  collectCoverage: true,
  coverageDirectory: 'src/coverage',
  // clearMocks: true,
};
