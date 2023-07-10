// eslint-disable-next-line @typescript-eslint/no-var-requires
const pjson = require('./package.json')

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|js)?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)']
  // testEnvironment: 'jsdom'
  // globals: {
  //   IM_ELITE_VERSION: JSON.stringify(pjson.version),
  //   IM_ELITE_SDK_VERSION: JSON.stringify(pjson.sdk.version),
  //   IM_ELITE_SDK_VERSION_HUMAN: JSON.stringify(pjson.sdk.versionFormat)
  // }
}
