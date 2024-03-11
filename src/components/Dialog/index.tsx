import {AnimatePresence, motion} from "framer-motion";
import './index.scss'

function Dialog ({children, show, setShow}) {

    const close = e => {
        e.target === e.currentTarget && setShow(false)
    }

    return (
        <AnimatePresence>
            {
                show && (
                    <div className="Dialog" onMouseDown={close}>
                        <motion.div
                            className="dialog-content img-dialogBg"
                            initial={{opacity: 0, y: 300}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: '-150%'}}
                        >
                            {children}
                        </motion.div>
                    </div>
                )
            }
        </AnimatePresence>
    )
}

export default Dialog