const nxPreset = require('@nx/jest/preset').default
const path = require('path')

const isCI = !!process.env.CI

let isShard = false
let shardNum = 0
try {
  const shard = process.env.SHARD
  isShard = !!shard
  shardNum = shard?.split('/')[0] ?? 0
} catch {
  // ignore
}

/** @type {import('@nx/jest/preset').nxPreset['coverageReporters']} */
let coverageReporters = ['text', isCI ? 'cobertura' : 'html']
const reporters = ['default']
if (isShard) {
  coverageReporters = [
    [
      'cobertura',
      {
        file: `cobertura-${shardNum}.xml`,
      },
    ],
    [
      'json',
      {
        file: `shard-${shardNum}.json`,
      },
    ],
  ]
}
if (isCI) {
  reporters.push([
    'jest-junit',
    {
      outputDirectory: 'coverage',
    },
  ])
}

/** @type {import('@nx/jest/preset').nxPreset} */
const config = {
  ...nxPreset,
  // ...(!isShard && {
  //   coverageThreshold: {
  //     global: {
  //       branches: 100,
  //       functions: 100,
  //       lines: 100,
  //       statements: 100,
  //     },
  //   },
  // }),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        isolatedModules: !process.env.CI,
      },
    ],
    '^.+\\.jsx?$': 'babel-jest',
    // '^.+\\.svg$': path.resolve(__dirname, './jest/svg-transformer.js'),
    // '.+\\.(png|jpg|gif|ttf|woff|woff2|mp4)$': path.resolve(
    //   __dirname,
    //   './jest/stub.js',
    // ),
    // '^.+\\.(css|less|scss|sass)$': path.resolve(__dirname, './jest/stub.js'),
  },
  // moduleNameMapper: {
  //   '^.+\\.(css|less|sass|scss)$': path.resolve(
  //     __dirname,
  //     './jest/file-mock.js',
  //   ),
  //   '^.+\\.(png|jpg|gif|ttf|woff|woff2|mp4)$': path.resolve(
  //     __dirname,
  //     './jest/file-mock.js',
  //   ),
  // },
  cache: false,
  cacheDirectory: path.join(__dirname, 'node_modules/.cache/jest'),
  setupFilesAfterEnv: [path.resolve(__dirname, 'jest.setupafterenv.tsx')],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!*.config.js',
    '!jest.config.ts',
    '!*.d.ts',
    '!**/pages/*_*.tsx',
    '!.storybook/**',
    '!**/*.stories.tsx',
    '!**/src/index.ts',
    '!**/**.mock.{ts,tsx}',
    '!**/**.handlers.{ts,tsx}',
  ],
  collectCoverage: false,
  coverageReporters,
  reporters,
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
}

// console.log('Jest config:', JSON.stringify(config, null, 2))

module.exports = config
