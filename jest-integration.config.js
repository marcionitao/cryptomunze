// jest-unit.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config');
module.exports = {
  ...config,
  testMatch: ['**/?(*.integration.)+(spec|test).[jt]s?(x)'],
};
