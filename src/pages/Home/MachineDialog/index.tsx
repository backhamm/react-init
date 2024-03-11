import {useEffect, useMemo, useState} from "react";
import { useTranslation } from 'react-i18next';
import {useRecoilState, useRecoilValue} from "recoil";
import {gameInfoState, showMachineState} from "@/store/common";
import Dialog from "@/components/Dialog";
import {getMachineList, gameEnter} from "@/api";
import './index.scss'

function MachineDialog () {
    const {t} = useTranslation()
    const [showMachine, setShowMachine] = useRecoilState(showMachineState)
    const gameInfo = useRecoilValue(gameInfoState)

    const [checkbox, setCheckbox] = useState(false)
    const [loading, setLoading] = useState(false)
    const [machineList, setMachineList] = useState([])

    useEffect(() => {
        if (showMachine) {
            setMachineList([])
            const {machineName, groupId, groupName, turnaroundPrice, gameCurrencyPrice, machineType} = gameInfo
            getMachineList({
                page: 1,
                num : 1000,
                machineType,
                gameName: machineName,
                groupId,
                turnaroundPrice,
                gameCurrencyPrice,
                gameType: groupName,
            }).then(res => {
                const data = res.code === '200' ? res.data.resultsList : []
                setMachineList(data)
            });
        }
    }, [showMachine])

    const machineListFilter = useMemo(() => {
        return machineList.filter(el => checkbox ? el.status === '2' : true)
    }, [checkbox, machineList])

    const enterGame = ({machineNumber}) => {
        if (!loading) {
            setLoading(true)
            gameEnter({
                machineNumber,
                language: 'JP',
            }).then(({code, data}) => {
                setLoading(false)
                code === '200' && setTimeout(() => {
                    window.open(data, '_blank')
                }, 300)
            }).catch(() => {
                setLoading(false)
            })
        }
    }

    return (
        <Dialog show={showMachine} setShow={setShowMachine}>
            <div className="MachineDialog">
                <div className="dialog-header">
                    <span className="header-text">{gameInfo.machineName}</span>
                    <div className="img-close" onClick={() => setShowMachine(false)} />
                </div>
                <div className="machine-title">
                    <div>
                        <div className="img-tag3">{gameInfo.groupName}</div>
                        <div className="img-tag5">{gameInfo.gameCurrencyPrice}{t('desc7')}</div>
                    </div>
                    <div className="select-box" onClick={() => setCheckbox(!checkbox)}>
                        <div className={`img-checkboxBg ${checkbox && 'active'}`} />
                        <span className="select-label">{t('desc2')}</span>
                    </div>
                </div>
                <div className="machine-list">
                    {machineListFilter.map(el => (
                        <div key={el.gameId} className="img-machineBg">
                            <div className="img-tag4">{el.machineNumber}</div>
                            <div>{t('desc8')}</div>
                            <div className="revolutions">{el.currentRevolutions?.toLocaleString()}</div>
                            <div className="img-enter" onClick={() => enterGame(el)} />
                        </div>
                    ))}
                </div>
            </div>
        </Dialog>
    )
}

export default MachineDialog