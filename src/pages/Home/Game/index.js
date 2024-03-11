import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import Select from "@/components/Select";
import { motion } from "framer-motion";
import { gameInfoState, showMachineState } from "@/store/common";
import { getMachineGroupList } from "@/api";
import './index.scss';
function Game() {
    const { t } = useTranslation();
    const setShowMachine = useSetRecoilState(showMachineState);
    const setGameInfoState = useSetRecoilState(gameInfoState);
    const [index, setIndex] = useState('2');
    const [filterId, setFilterId] = useState(null);
    const [searchVal, setSearchVal] = useState('');
    const [selectVal, setSelectVal] = useState([]);
    const [checkbox, setCheckbox] = useState(false);
    const [resList, setResList] = useState([]);
    const [filterArr, setFilterArr] = useState([]);
    const [options, setOptions] = useState([]);
    const [gameList, setGameList] = useState([]);
    const [gameInfo, setGameInfo] = useState([]);
    useEffect(() => {
        setFilterArr([]);
        setGameList([]);
        setSearchVal('');
        // const data = [
        //     {
        //         "groupId": "20211213050529149",
        //         "groupName": "4號机",
        //         "parentId": "20211213050520674",
        //         "groupLog": "http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2021-12/202112130505270801639386327080.png",
        //         "pachinkoGameListDTO": [
        //             {
        //                 "machineId": "20220401010628136",
        //                 "machineNumber": "S008",
        //                 "machineRevolutions": "268",
        //                 "status": "2",
        //                 "machineName": "番長",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150211563161652595116316.jpg",
        //                 "recentSpins": "",
        //                 "count": "1",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220401111817004",
        //                 "machineNumber": "S024",
        //                 "machineRevolutions": "349",
        //                 "status": "2",
        //                 "machineName": "夏普",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150204585031652594698503.jpg",
        //                 "recentSpins": "",
        //                 "count": "2",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220401114948391",
        //                 "machineNumber": "S019",
        //                 "machineRevolutions": "198",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150206400571652594800057.jpg",
        //                 "recentSpins": "",
        //                 "count": "3",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220401121652439",
        //                 "machineNumber": "S014",
        //                 "machineRevolutions": "111",
        //                 "status": "2",
        //                 "machineName": "北斗",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150202423211652594562321.jpg",
        //                 "recentSpins": "",
        //                 "count": "4",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220404035725918",
        //                 "machineNumber": "S048",
        //                 "machineRevolutions": "289",
        //                 "status": "2",
        //                 "machineName": "鬼武者",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150203573981652594637398.jpg",
        //                 "recentSpins": "",
        //                 "count": "5",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220527065603566",
        //                 "machineNumber": "S003",
        //                 "machineRevolutions": "132",
        //                 "status": "2",
        //                 "machineName": "加奈子708",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205270656468761653649006876.jpg",
        //                 "recentSpins": "",
        //                 "count": "6",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220527071018201",
        //                 "machineNumber": "S030",
        //                 "machineRevolutions": "484",
        //                 "status": "2",
        //                 "machineName": "吉宗",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205270709421811653649782181.jpg",
        //                 "recentSpins": "",
        //                 "count": "7",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220527074059271",
        //                 "machineNumber": "S005",
        //                 "machineRevolutions": "1092",
        //                 "status": "2",
        //                 "machineName": "鬼武606",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205270740342521653651634252.jpg",
        //                 "recentSpins": "",
        //                 "count": "8",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706023438928",
        //                 "machineNumber": "S047",
        //                 "machineRevolutions": "346",
        //                 "status": "2",
        //                 "machineName": "鬼武者",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060230285521657089028552.jpg",
        //                 "recentSpins": "",
        //                 "count": "9",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706024754778",
        //                 "machineNumber": "S023",
        //                 "machineRevolutions": "181",
        //                 "status": "2",
        //                 "machineName": "夏普",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060246374331657089997433.jpg",
        //                 "recentSpins": "",
        //                 "count": "10",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706030038987",
        //                 "machineNumber": "S017",
        //                 "machineRevolutions": "120",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060259275871657090767587.jpg",
        //                 "recentSpins": "",
        //                 "count": "11",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706030610470",
        //                 "machineNumber": "S018",
        //                 "machineRevolutions": "340",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060305153181657091115318.jpg",
        //                 "recentSpins": "",
        //                 "count": "12",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706031008913",
        //                 "machineNumber": "S020",
        //                 "machineRevolutions": "204",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060309171391657091357139.jpg",
        //                 "recentSpins": "",
        //                 "count": "13",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706031643558",
        //                 "machineNumber": "S038",
        //                 "machineRevolutions": "272",
        //                 "status": "2",
        //                 "machineName": "南國育",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060315438991657091743899.jpg",
        //                 "recentSpins": "",
        //                 "count": "14",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706032808698",
        //                 "machineNumber": "S040",
        //                 "machineRevolutions": "243",
        //                 "status": "2",
        //                 "machineName": "南國育",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060328074521657092487452.jpg",
        //                 "recentSpins": "",
        //                 "count": "15",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706035047465",
        //                 "machineNumber": "S016",
        //                 "machineRevolutions": "119",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060349368981657093776898.jpg",
        //                 "recentSpins": "",
        //                 "count": "16",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220706035417079",
        //                 "machineNumber": "S013",
        //                 "machineRevolutions": "175",
        //                 "status": "2",
        //                 "machineName": "北斗",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060354155391657094055539.jpg",
        //                 "recentSpins": "",
        //                 "count": "17",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             }
        //         ]
        //     },
        //     {
        //         "groupId": "20220124122557053",
        //         "groupName": "測試",
        //         "parentId": "20220115025841593",
        //         "groupLog": "/GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //         "pachinkoGameListDTO": [
        //             {
        //                 "machineId": "20230920033520852",
        //                 "machineNumber": "9999",
        //                 "machineRevolutions": "218",
        //                 "status": "2",
        //                 "machineName": "test37",
        //                 "machineLog": "https://static-minio.dmrd-test.com//GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //                 "recentSpins": "",
        //                 "count": "18",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "1.0"
        //             }
        //         ]
        //     },
        //     {
        //         "groupId": "20220513053515279",
        //         "groupName": "5號机",
        //         "parentId": "20211213050520674",
        //         "groupLog": "/GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //         "pachinkoGameListDTO": [
        //             {
        //                 "machineId": "20220401010222613",
        //                 "machineNumber": "S006",
        //                 "machineRevolutions": "360",
        //                 "status": "2",
        //                 "machineName": "大力工頭607",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-12/202212040416066411670141766641.jpg",
        //                 "recentSpins": "",
        //                 "count": "19",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220401010526731",
        //                 "machineNumber": "S007",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "豪炎",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050636101151696502170115.png",
        //                 "recentSpins": "",
        //                 "count": "20",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220401121742833",
        //                 "machineNumber": "S015",
        //                 "machineRevolutions": "127",
        //                 "status": "2",
        //                 "machineName": "月下雷鳴",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-10/202210150429593291665822599329.jpg",
        //                 "recentSpins": "",
        //                 "count": "21",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220401123722794",
        //                 "machineNumber": "S037",
        //                 "machineRevolutions": "148",
        //                 "status": "2",
        //                 "machineName": "賓果",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-12/202212040413344001670141614400.jpg",
        //                 "recentSpins": "",
        //                 "count": "22",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220401124743836",
        //                 "machineNumber": "S031",
        //                 "machineRevolutions": "192",
        //                 "status": "2",
        //                 "machineName": "魁男~天桃五輪",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050609089981696500548998.png",
        //                 "recentSpins": "",
        //                 "count": "23",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220401124825188",
        //                 "machineNumber": "S032",
        //                 "machineRevolutions": "73",
        //                 "status": "2",
        //                 "machineName": "魁男~天桃五輪",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050610380111696500638011.png",
        //                 "recentSpins": "",
        //                 "count": "24",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220404044636075",
        //                 "machineNumber": "S036",
        //                 "machineRevolutions": "302",
        //                 "status": "2",
        //                 "machineName": "冥王黑帝斯",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-08/202208180722500601660821770060.jpg",
        //                 "recentSpins": "",
        //                 "count": "25",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220404044725832",
        //                 "machineNumber": "S009",
        //                 "machineRevolutions": "103",
        //                 "status": "2",
        //                 "machineName": "七夜怪談",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-09/202209141108565551663168136555.jpg",
        //                 "recentSpins": "",
        //                 "count": "26",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220404044907086",
        //                 "machineNumber": "S011",
        //                 "machineRevolutions": "170",
        //                 "status": "2",
        //                 "machineName": "星矢海皇",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn./GuiWuZheH5_Admin/file/2022-11/202211220113212761669094001276.jpg",
        //                 "recentSpins": "",
        //                 "count": "27",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220404044948248",
        //                 "machineNumber": "S012",
        //                 "machineRevolutions": "80",
        //                 "status": "2",
        //                 "machineName": "惡魔鐵拳",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-08/202208180500448401660813244840.jpg",
        //                 "recentSpins": "",
        //                 "count": "28",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20220527073732145",
        //                 "machineNumber": "S035",
        //                 "machineRevolutions": "220",
        //                 "status": "2",
        //                 "machineName": "金太郎",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050613307811696500810781.png",
        //                 "recentSpins": "",
        //                 "count": "29",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926021904385",
        //                 "machineNumber": "S001",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "默示錄3",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050630136731696501813673.png",
        //                 "recentSpins": "",
        //                 "count": "30",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926022014868",
        //                 "machineNumber": "S002",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "雙擊",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050628506911696501730691.jpg",
        //                 "recentSpins": "",
        //                 "count": "31",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926023925823",
        //                 "machineNumber": "S026",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "吉宗~極",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050624030711696501443071.png",
        //                 "recentSpins": "",
        //                 "count": "32",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926024041969",
        //                 "machineNumber": "S027",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "黃門喝",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050605495761696500349576.png",
        //                 "recentSpins": "",
        //                 "count": "33",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926024209480",
        //                 "machineNumber": "S028",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "黃門喝",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050623313401696501411340.png",
        //                 "recentSpins": "",
        //                 "count": "34",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926024921693",
        //                 "machineNumber": "S049",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "魁男~超",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050616107351696500970735.png",
        //                 "recentSpins": "",
        //                 "count": "35",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926025018774",
        //                 "machineNumber": "S050",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "小拳王2",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050617537141696501073714.png",
        //                 "recentSpins": "",
        //                 "count": "36",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926025122313",
        //                 "machineNumber": "S052",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "鬼武再臨",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050618599591696501139959.png",
        //                 "recentSpins": "",
        //                 "count": "37",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "2.5"
        //             },
        //             {
        //                 "machineId": "20230926025146221",
        //                 "machineNumber": "S053",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "S053",
        //                 "machineLog": "https://static-minio.dmrd-test.com//GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //                 "recentSpins": "",
        //                 "count": "38",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "1.0"
        //             },
        //             {
        //                 "machineId": "20230926025227148",
        //                 "machineNumber": "S054",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "S054",
        //                 "machineLog": "https://static-minio.dmrd-test.com//GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //                 "recentSpins": "",
        //                 "count": "39",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "1.0"
        //             },
        //             {
        //                 "machineId": "20230926025322558",
        //                 "machineNumber": "S055",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "S055",
        //                 "machineLog": "https://static-minio.dmrd-test.com//GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //                 "recentSpins": "",
        //                 "count": "40",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "1.0"
        //             },
        //             {
        //                 "machineId": "20230926025358076",
        //                 "machineNumber": "S056",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "S056",
        //                 "machineLog": "https://static-minio.dmrd-test.com//GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //                 "recentSpins": "",
        //                 "count": "41",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "1.0"
        //             },
        //             {
        //                 "machineId": "20230926025419292",
        //                 "machineNumber": "S057",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "S057",
        //                 "machineLog": "https://static-minio.dmrd-test.com//GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //                 "recentSpins": "",
        //                 "count": "42",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "1.0"
        //             },
        //             {
        //                 "machineId": "20230926025438232",
        //                 "machineNumber": "S058",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "S058",
        //                 "machineLog": "https://static-minio.dmrd-test.com//GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //                 "recentSpins": "",
        //                 "count": "43",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "1.0"
        //             }
        //         ]
        //     },
        //     {
        //         "groupId": "20221028105946286",
        //         "groupName": "4號機",
        //         "parentId": "20221028105116305",
        //         "groupLog": "/GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //         "pachinkoGameListDTO": [
        //             {
        //                 "machineId": "20220401104501168",
        //                 "machineNumber": "S045",
        //                 "machineRevolutions": "330",
        //                 "status": "2",
        //                 "machineName": "鬼武者",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150204219891652594661989.jpg",
        //                 "recentSpins": "",
        //                 "count": "44",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220401110027938",
        //                 "machineNumber": "S021",
        //                 "machineRevolutions": "128",
        //                 "status": "2",
        //                 "machineName": "夏普",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150205177941652594717794.jpg",
        //                 "recentSpins": "",
        //                 "count": "45",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220401112328542",
        //                 "machineNumber": "S041",
        //                 "machineRevolutions": "206",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150208216251652594901625.jpg",
        //                 "recentSpins": "",
        //                 "count": "46",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220401113421690",
        //                 "machineNumber": "S044",
        //                 "machineRevolutions": "206",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150207565901652594876590.jpg",
        //                 "recentSpins": "",
        //                 "count": "47",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220401124612708",
        //                 "machineNumber": "S029",
        //                 "machineRevolutions": "320",
        //                 "status": "2",
        //                 "machineName": "吉宗",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150210387281652595038728.jpg",
        //                 "recentSpins": "",
        //                 "count": "48",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220404044323021",
        //                 "machineNumber": "S033",
        //                 "machineRevolutions": "274",
        //                 "status": "2",
        //                 "machineName": "南國育",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150157128831652594232883.jpg",
        //                 "recentSpins": "",
        //                 "count": "49",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220404044423565",
        //                 "machineNumber": "S034",
        //                 "machineRevolutions": "234",
        //                 "status": "2",
        //                 "machineName": "南國育",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150157013601652594221360.jpg",
        //                 "recentSpins": "",
        //                 "count": "50",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220404044819483",
        //                 "machineNumber": "S010",
        //                 "machineRevolutions": "110",
        //                 "status": "2",
        //                 "machineName": "北斗",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205150202286701652594548670.jpg",
        //                 "recentSpins": "",
        //                 "count": "51",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220527070640816",
        //                 "machineNumber": "S046",
        //                 "machineRevolutions": "151",
        //                 "status": "2",
        //                 "machineName": "鬼武者",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205270706112331653649571233.jpg",
        //                 "recentSpins": "",
        //                 "count": "52",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220527074657615",
        //                 "machineNumber": "S042",
        //                 "machineRevolutions": "316",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-05/202205270746250831653651985083.jpg",
        //                 "recentSpins": "",
        //                 "count": "53",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220706024245453",
        //                 "machineNumber": "S022",
        //                 "machineRevolutions": "297",
        //                 "status": "2",
        //                 "machineName": "夏普",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060240466411657089646641.jpg",
        //                 "recentSpins": "",
        //                 "count": "54",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220706025308017",
        //                 "machineNumber": "S043",
        //                 "machineRevolutions": "172",
        //                 "status": "2",
        //                 "machineName": "悟空",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-07/202207060251374521657090297452.jpg",
        //                 "recentSpins": "",
        //                 "count": "55",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             }
        //         ]
        //     },
        //     {
        //         "groupId": "20221028110032490",
        //         "groupName": "5號機",
        //         "parentId": "20221028105116305",
        //         "groupLog": "/GuiWuZheH5_Admin/form_util/util/images/upload.png",
        //         "pachinkoGameListDTO": [
        //             {
        //                 "machineId": "20220408052414283",
        //                 "machineNumber": "S004",
        //                 "machineRevolutions": "141",
        //                 "status": "2",
        //                 "machineName": "星矢海皇",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn./GuiWuZheH5_Admin/file/2022-11/202211220112499161669093969916.jpg",
        //                 "recentSpins": "",
        //                 "count": "56",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20220706032109941",
        //                 "machineNumber": "S039",
        //                 "machineRevolutions": "398",
        //                 "status": "2",
        //                 "machineName": "月下雷鳴",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2022-12/202212040414291511670141669151.jpg",
        //                 "recentSpins": "",
        //                 "count": "57",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20230926023847921",
        //                 "machineNumber": "S025",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "吉宗~極",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050624172841696501457284.png",
        //                 "recentSpins": "",
        //                 "count": "58",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             },
        //             {
        //                 "machineId": "20230926025059097",
        //                 "machineNumber": "S051",
        //                 "machineRevolutions": "0",
        //                 "status": "2",
        //                 "machineName": "鬼武再臨",
        //                 "machineLog": "https://static-minio.dmrd-test.com/http://37ji.ruqjtcp.cn/GuiWuZheH5_Admin/file/2023-10/202310050618388511696501118851.png",
        //                 "recentSpins": "",
        //                 "count": "59",
        //                 "courtyard": "0.0",
        //                 "gameCurrencyPrice": "0.0",
        //                 "turnaroundPrice": "5.0"
        //             }
        //         ]
        //     }
        // ]
        // setResList(data)
        // const filterList = data.map(el => ({groupId: el.groupId, groupName: el.groupName}))
        // setFilterArr(filterList)
        // filterList.length && setFilterId(filterList[0].groupId)
        getMachineGroupList({
            machineType: index, // 2：pachinko； 3：pachinkoSlot
            page: 1,
            num: 1000,
        }).then(res => {
            const data = res.code === '200' ? res.data.groupList : [];
            setResList(data);
            const filterList = data.map(el => ({ groupId: el.groupId, groupName: el.groupName }));
            setFilterArr(filterList);
            filterList.length && setFilterId(filterList[0].groupId);
        });
    }, [index]);
    useEffect(() => {
        if (filterId) {
            const data = resList.find(el => el.groupId === filterId) || [];
            setGameInfo(data);
            const arr = [];
            data.pachinkoGameListDTO.forEach(el => {
                arr.findIndex(item => item.machineName === el.machineName) === -1 && arr.push(el);
            });
            setOptions(arr);
            setGameList(data.pachinkoGameListDTO);
            setSelectVal(arr.map(el => el.machineName));
        }
    }, [filterId]);
    const gameListFilter = useMemo(() => {
        return gameList.filter(el => {
            const rule1 = selectVal.includes(el.machineName);
            const rule2 = searchVal ? el.machineName === searchVal : true;
            const rule3 = checkbox ? Number(el.count) > 0 : true;
            return rule1 && rule2 && rule3;
        });
    }, [selectVal, searchVal, checkbox]);
    const showMachine = data => {
        const { groupName, groupId } = gameInfo;
        setGameInfoState({ ...data, groupName, groupId, machineType: index });
        setShowMachine(true);
    };
    return (_jsxs("div", { className: "Game", children: [_jsxs(motion.div, { className: "game-header", initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: 'spring', delay: .3 }, children: [_jsxs("div", { children: [_jsx("div", { className: `button ${index === '2' && 'active'}`, onClick: () => setIndex('2') }), _jsx("div", { className: `button ${index === '3' && 'active'}`, onClick: () => setIndex('3') })] }), _jsxs("div", { className: "header-right", children: [_jsxs("div", { className: "select-box", onClick: () => setCheckbox(!checkbox), children: [_jsx("div", { className: `img-checkboxBg ${checkbox && 'active'}` }), _jsx("span", { className: "select-label", children: t('desc2') })] }), _jsx("div", { className: "img-btn1Ac" })] })] }), _jsx("div", { className: "img-line1" }), _jsxs(motion.div, { className: "filter-list", initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: 'spring', delay: .5 }, children: [_jsxs("div", { className: "filter-left", children: [filterArr.map(el => {
                                return (_jsx("div", { className: filterId === el.groupId ? 'img-btn3Ac' : 'img-btn3', onClick: () => setFilterId(el.groupId), children: _jsx("span", { className: "text", children: el.groupName }) }, el.groupId));
                            }), gameList.length ? (_jsx(Select, { value: selectVal, options: options, change: setSelectVal, showCheckbox: true, multiple: true, valueKey: "machineName", labelKey: "machineName", label: t('desc3'), afterIcon: "img-drop", className: "img-selectBg" })) : _jsx(_Fragment, {})] }), _jsx("div", { className: "img-search", children: _jsx("input", { value: searchVal, onInput: e => setSearchVal(e.currentTarget.value), className: "input", type: "text" }) })] }), _jsx(motion.div, { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: 'spring', delay: .7 }, className: "game-list", children: gameListFilter.map(el => (_jsxs("div", { className: "img-gameBg", onClick: () => showMachine(el), children: [_jsxs("div", { className: "game-left", children: [_jsx("div", { className: "img-content", children: _jsx("img", { className: "img", src: el.machineLog, alt: "" }) }), _jsx("div", { className: `game-sort img-tag${index}`, children: gameInfo.groupName }), _jsx("div", { className: "game-name", children: el.machineName })] }), _jsxs("div", { className: "game-right", children: [_jsxs("div", { className: "right-item", children: [_jsx("div", { className: "title", children: t('desc4') }), _jsx("div", { className: "value1", children: el.courtyard })] }), _jsxs("div", { className: "right-item", children: [_jsx("div", { className: "title", children: t('desc5') }), _jsxs("div", { className: "value2", children: [_jsx("div", { className: "img-coin" }), el.turnaroundPrice] })] }), _jsxs("div", { className: "right-item", children: [_jsx("div", { className: "title", children: t('desc6') }), _jsx("div", { className: "value3", children: el.count })] }), _jsxs("div", { className: "right-item-last", children: [_jsx("span", { className: "value", children: el.gameCurrencyPrice }), t('desc7')] })] })] }, el.machineId))) })] }));
}
export default Game;
