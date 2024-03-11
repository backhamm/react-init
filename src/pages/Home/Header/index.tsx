import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {toast} from "@/utils/toast";
import {motion} from "framer-motion";
import {getBalance} from "@/api";
import './index.scss'

function Header() {
    const {t} = useTranslation()

    const [balance, setBalance] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getBalanceApi()
    }, [])

    const getBalanceApi = () => {
        setLoading(true)
        !loading && getBalance().then(res => {
            setBalance(res.data || 0)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })

    }

    const expect = () => {
        toast(t('desc1'))
    }

    return (
        <div className="Header">
            <motion.div
                className="header-content"
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring'}}
            >
                <div className="img-logo" />
                <div className="header-right">
                    <div className="img-amountBg">
                        <div className="amount-value">{String(balance).toLocaleString()}</div>
                        <div className="img-refresh" onClick={getBalanceApi}>
                            <div className={`img-rotate ${loading && 'rotate'}`} />
                        </div>
                    </div>
                    <div className="img-bell" onClick={expect} />
                    <div className="img-menu" onClick={expect} />
                </div>
            </motion.div>
        </div>
    );
}

export default Header;