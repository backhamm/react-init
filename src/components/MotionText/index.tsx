import {textMotion} from "@/utils/motion";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

function MotionText(props) {
    const {inView, className, text} = props
    const titleRef = useRef(null)
    const titleInView = useInView(titleRef, {once: true})

    return (
        <motion.div
            ref={titleRef}
            className={className}
            variants={textMotion.container}
            initial="hidden"
            animate={inView || titleInView ? 'visible' : 'hidden'}
        >
            {
                String(text).split('').map((el, i) =>
                    <motion.span key={i} variants={textMotion.item} style={{position: 'relative'}}>{el}</motion.span>
                )
            }
        </motion.div>
    )
}

export default MotionText