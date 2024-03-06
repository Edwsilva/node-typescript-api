// subscribe

const { resolve } = require('path');
const root = resolve(__dirname, '..');
//subscribe global config
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {...rootConfig, ...{
  rootDir: root,
  displayName: "end2end-tests",
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
  // only files in this directory
  testMatch: ["<rootDir>/test/**/*.test.ts"],
}}