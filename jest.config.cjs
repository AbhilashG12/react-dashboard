/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/testing/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { 
      // This tells ts-jest to use these settings instead of the ones in tsconfig.json
      tsconfig: {
        verbatimModuleSyntax: false,
        esModuleInterop: true,
        jsx: 'react-jsx'
      }
    }],
  },
};