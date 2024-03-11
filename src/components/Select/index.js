import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './index.scss';
function Select(props) {
    const { beforeIcon, value, options, optionIcon, change, afterIcon, className, showCheckbox, label, multiple, labelKey = 'label', valueKey = 'value' } = props;
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const windowClick = () => {
            open && setOpen(false);
        };
        window.addEventListener('click', windowClick);
        return () => window.removeEventListener('click', windowClick);
    }, [open]);
    const switchOpen = e => {
        e.stopPropagation();
        setOpen(!open);
    };
    return (_jsxs("div", { className: `${className} select-content`, onClick: switchOpen, children: [beforeIcon && beforeIcon, _jsx("div", { className: "select-value", children: label || options.find(el => el[valueKey] === value)?.label }), _jsx("i", { className: `after-icon ${afterIcon || 'icon-drop'} ${open && 'open'}` }), _jsx(AnimatePresence, { children: open && (_jsx(motion.div, { className: "select-options img-optionsBg", initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 }, children: _jsx("div", { className: "options-content", children: options.map(el => (_jsxs("div", { className: `option ${value.includes(el[valueKey]) && 'active'}`, onClick: e => {
                                if (multiple) {
                                    e.stopPropagation();
                                    change(value.includes(el[valueKey]) ? value.filter(val => val !== el[valueKey]) : [...value, el[valueKey]]);
                                }
                                else {
                                    change(el[valueKey]);
                                }
                            }, children: [optionIcon && (_jsx("i", { className: `size-20 icon-${el[valueKey]}` })), showCheckbox && (_jsx("div", { className: "select-box", children: _jsx("div", { className: "img-checkboxBg" }) })), _jsx("span", { style: { flex: 1 }, children: el[labelKey] })] }, el[valueKey]))) }) })) })] }));
}
export default Select;
