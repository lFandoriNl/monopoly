import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['js', 'ts'],
};

export default config;
