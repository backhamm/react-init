import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "@/utils/toast";
import { motion } from "framer-motion";
import { getBalance } from "@/api";
import './index.scss';
function Header() {
    const { t } = useTranslation();
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getBalanceApi();
    }, []);
    const getBalanceApi = () => {
        setLoading(true);
        !loading && getBalance().then(res => {
            setBalance(res.data || 0);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    };
    const expect = () => {
        toast(t('desc1'));
    };
    return (_jsx("div", { className: "Header", children: _jsxs(motion.div, { className: "header-content", initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: 'spring' }, children: [_jsx("div", { className: "img-logo" }), _jsxs("div", { className: "header-right", children: [_jsxs("div", { className: "img-amountBg", children: [_jsx("div", { className: "amount-value", children: String(balance).toLocaleString() }), _jsx("div", { className: "img-refresh", onClick: getBalanceApi, children: _jsx("div", { className: `img-rotate ${loading && 'rotate'}` }) })] }), _jsx("div", { className: "img-bell", onClick: expect }), _jsx("div", { className: "img-menu", onClick: expect })] })] }) }));
}
export default Header;
