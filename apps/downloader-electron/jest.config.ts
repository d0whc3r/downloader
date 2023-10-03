import type { Config } from 'jest'

const config: Config = {
  displayName: 'downloader-electron',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  // transform: {
  //   '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  // },
  // moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/downloader-electron',
}

export default config
