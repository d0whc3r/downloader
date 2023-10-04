export type ConfigStore = {
  maxConcurrentJobs: number
  retry: {
    download: number
    infoRequest: number
  }
  autoUpdate: {
    app: boolean
    ytdl: boolean
  }
  proxy?: string
  rateLimit?: number
  output: {
    video: VideoFormat
    audio: AudioFormat
  }
  filename: {
    format: FilenameFormat
    template: string
  }
  restoreQueueOnRestart: boolean
  userAgent: UserAgentOption
  validateSSL: boolean
}

export enum VideoFormat {
  AUTO = 'auto',
  MP4 = 'mp4',
  MKV = 'mkv',
  FLV = 'flv',
  WEBM = 'webm',
}

export enum AudioFormat {
  AUTO = 'auto',
  MP3 = 'mp3',
  M4A = 'm4a',
  OPUS = 'opus',
  VORBIS = 'vorbis',
  WAV = 'wav',
  AAC = 'aac',
  FLAC = 'flac',
}

export enum FilenameFormat {
  TITLE_QUALITY = 'title_quality',
  TITLE = 'title',
  CUSTOM = 'custom',
}

export enum UserAgentOption {
  SPOOF = 'spoof',
  EMPTY = 'empty',
  DEFAULT = 'default',
  CUSTOM = 'custom',
}

export type QueueStore = {
  thumbnail?: string
  headers?: Record<string, string>
  url: string
  title: string
  description?: string
  duration?: number
  size?: number
  status: QueueStatus
  output: {
    video: VideoFormat
    audio: AudioFormat
  }
  subtitles: {
    enabled: boolean
    language: string[]
  }
  info: {
    views?: number
    likes?: number
    rating?: [number, number]
    uploader?: string
    extractor: string
  }
}

export enum QueueStatus {
  PENDING,
  DOWNLOADING,
  FINISHED,
}
