import {atom} from "recoil";

export const isH5State = atom({
    key: 'isH5State',
    default: null
})

export const showMachineState = atom({
    key: 'showMachineState',
    default: false
})

export const gameInfoState = atom({
    key: 'gameInfoState',
    default: {}
})
