import { post } from '@/api/config'

export const getMachineGroupList = params => post('/pachinko/getGroupToGameList', params)

export const getMachineList = params => post('/pachinko/getMachineGameList', params)

export const getBalance = params => post('/pachinko/hall/getBalance', params)

export const getNotice = params => post('/pachinko/hall/getIndexNotice', params)

export const gameEnter = params => post('/pachinko/getGameUrl', params)

