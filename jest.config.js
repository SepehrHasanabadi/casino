/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: { "\\.(css|scss)$": "<rootDir>/src/tests/styleMock.js" },
  testEnvironment: 'jsdom',
};