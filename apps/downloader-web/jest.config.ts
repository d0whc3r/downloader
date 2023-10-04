import type { Config } from 'jest'

const config: Config = {
  displayName: 'downloader-web',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setupafterenv.ts'],
  // setupFiles: ['<rootDir>/jest.setup.tsx'],
  globalSetup: '<rootDir>/jest.global.ts',
  coverageDirectory: '../../coverage/apps/downloader-web',
  snapshotSerializers: ['@emotion/jest/enzyme-serializer'],
}

export default config
