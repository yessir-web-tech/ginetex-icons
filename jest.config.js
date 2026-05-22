module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.test.js'],
  collectCoverageFrom: ['src/**/*.js', '!src/cli.js'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['/node_modules/']
};
