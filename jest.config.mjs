/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  roots: [
    "./scripts"
  ],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};

