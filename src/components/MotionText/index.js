import { jsx as _jsx } from "react/jsx-runtime";
import { textMotion } from "@/utils/motion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function MotionText(props) {
    const { inView, className, text } = props;
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    return (_jsx(motion.div, { ref: titleRef, className: className, variants: textMotion.container, initial: "hidden", animate: inView || titleInView ? 'visible' : 'hidden', children: String(text).split('').map((el, i) => _jsx(motion.span, { variants: textMotion.item, style: { position: 'relative' }, children: el }, i)) }));
}
export default MotionText;
