import { atom } from 'recoil'

import {
  AudioFormat,
  ConfigStore,
  FilenameFormat,
  UserAgentOption,
  VideoFormat,
} from '@web/types/store'

import { genericSyncEffect } from '../common'

export const CONFIG_STORE_KEY = 'configStore'

const defaultConfigStoreValue: ConfigStore = {
  maxConcurrentJobs: 6,
  retry: {
    download: 10,
    infoRequest: 3,
  },
  autoUpdate: {
    app: true,
    ytdl: true,
  },
  proxy: undefined,
  rateLimit: undefined,
  output: {
    video: VideoFormat.AUTO,
    audio: AudioFormat.AUTO,
  },
  filename: {
    format: FilenameFormat.TITLE,
    template: '%(title).200s.%(ext)s',
  },
  restoreQueueOnRestart: true,
  userAgent: UserAgentOption.SPOOF,
  validateSSL: false,
}

export const configStore = atom({
  key: CONFIG_STORE_KEY,
  default: { ...defaultConfigStoreValue },
  effects: [genericSyncEffect(CONFIG_STORE_KEY, defaultConfigStoreValue)],
})
