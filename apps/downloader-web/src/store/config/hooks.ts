import { useRecoilState } from 'recoil'

import { configStore } from './store'

export const useConfig = () => useRecoilState(configStore)
