import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import './index.scss'

function Select(props) {
    const {beforeIcon, value, options, optionIcon, change, afterIcon, className, showCheckbox, label, multiple, labelKey = 'label', valueKey = 'value'} = props
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const windowClick = () => {
            open && setOpen(false)
        }
        window.addEventListener('click', windowClick)
        return () => window.removeEventListener('click', windowClick)
    }, [open])

    const switchOpen = e => {
        e.stopPropagation()
        setOpen(!open)
    }

    return (
        <div className={`${className} select-content`} onClick={switchOpen}>
            {beforeIcon && beforeIcon}
            <div className="select-value">{label || options.find(el => el[valueKey] === value)?.label}</div>
            <i className={`after-icon ${afterIcon || 'icon-drop'} ${open && 'open'}`} />
            <AnimatePresence>
                {open && (
                    <motion.div className="select-options img-optionsBg" initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 50}}>
                        <div className="options-content">
                            {options.map(el => (
                                <div key={el[valueKey]} className={`option ${value.includes(el[valueKey]) && 'active'}`} onClick={e => {
                                    if (multiple) {
                                        e.stopPropagation()
                                        change(value.includes(el[valueKey]) ? value.filter(val => val !== el[valueKey]) : [...value, el[valueKey]])
                                    } else {
                                        change(el[valueKey])
                                    }

                                }}>
                                    {optionIcon && (
                                        <i className={`size-20 icon-${el[valueKey]}`} />
                                    )}
                                    {showCheckbox && (
                                        <div className="select-box">
                                            <div className="img-checkboxBg" />
                                        </div>
                                    )}
                                    <span style={{flex: 1}}>{el[labelKey]}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Select;