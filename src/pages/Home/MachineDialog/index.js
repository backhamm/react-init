import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue } from "recoil";
import { gameInfoState, showMachineState } from "@/store/common";
import Dialog from "@/components/Dialog";
import { getMachineList, gameEnter } from "@/api";
import './index.scss';
function MachineDialog() {
    const { t } = useTranslation();
    const [showMachine, setShowMachine] = useRecoilState(showMachineState);
    const gameInfo = useRecoilValue(gameInfoState);
    const [checkbox, setCheckbox] = useState(false);
    const [loading, setLoading] = useState(false);
    const [machineList, setMachineList] = useState([]);
    useEffect(() => {
        if (showMachine) {
            setMachineList([]);
            const { machineName, groupId, groupName, turnaroundPrice, gameCurrencyPrice, machineType } = gameInfo;
            getMachineList({
                page: 1,
                num: 1000,
                machineType,
                gameName: machineName,
                groupId,
                turnaroundPrice,
                gameCurrencyPrice,
                gameType: groupName,
            }).then(res => {
                const data = res.code === '200' ? res.data.resultsList : [];
                setMachineList(data);
            });
        }
    }, [showMachine]);
    const machineListFilter = useMemo(() => {
        return machineList.filter(el => checkbox ? el.status === '2' : true);
    }, [checkbox, machineList]);
    const enterGame = ({ machineNumber }) => {
        if (!loading) {
            setLoading(true);
            gameEnter({
                machineNumber,
                language: 'JP',
            }).then(({ code, data }) => {
                setLoading(false);
                code === '200' && setTimeout(() => {
                    window.open(data, '_blank');
                }, 300);
            }).catch(() => {
                setLoading(false);
            });
        }
    };
    return (_jsx(Dialog, { show: showMachine, setShow: setShowMachine, children: _jsxs("div", { className: "MachineDialog", children: [_jsxs("div", { className: "dialog-header", children: [_jsx("span", { className: "header-text", children: gameInfo.machineName }), _jsx("div", { className: "img-close", onClick: () => setShowMachine(false) })] }), _jsxs("div", { className: "machine-title", children: [_jsxs("div", { children: [_jsx("div", { className: "img-tag3", children: gameInfo.groupName }), _jsxs("div", { className: "img-tag5", children: [gameInfo.gameCurrencyPrice, t('desc7')] })] }), _jsxs("div", { className: "select-box", onClick: () => setCheckbox(!checkbox), children: [_jsx("div", { className: `img-checkboxBg ${checkbox && 'active'}` }), _jsx("span", { className: "select-label", children: t('desc2') })] })] }), _jsx("div", { className: "machine-list", children: machineListFilter.map(el => (_jsxs("div", { className: "img-machineBg", children: [_jsx("div", { className: "img-tag4", children: el.machineNumber }), _jsx("div", { children: t('desc8') }), _jsx("div", { className: "revolutions", children: el.currentRevolutions?.toLocaleString() }), _jsx("div", { className: "img-enter", onClick: () => enterGame(el) })] }, el.gameId))) })] }) }));
}
export default MachineDialog;
