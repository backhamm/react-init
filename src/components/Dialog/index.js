import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import './index.scss';
function Dialog({ children, show, setShow }) {
    const close = e => {
        e.target === e.currentTarget && setShow(false);
    };
    return (_jsx(AnimatePresence, { children: show && (_jsx("div", { className: "Dialog", onMouseDown: close, children: _jsx(motion.div, { className: "dialog-content img-dialogBg", initial: { opacity: 0, y: 300 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: '-150%' }, children: children }) })) }));
}
export default Dialog;
