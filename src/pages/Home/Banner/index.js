import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { arr } from "@/utils/func";
import { getNotice } from "@/api";
import './index.scss';
function Banner() {
    const [contentWidth, setContentWidth] = useState(null);
    const [scrollWidth, setScrollWidth] = useState(null);
    const [dotIndex, setDotIndex] = useState(0);
    const [noticeList, setNoticeList] = useState([]);
    useEffect(() => {
        setContentWidth(document.getElementsByClassName('bulletin-content')[0].clientWidth);
        setScrollWidth(document.getElementsByClassName('bulletin-scroll')[0].clientWidth);
        getNotice().then(res => {
            setNoticeList(res.data);
        });
    }, []);
    return (_jsxs("div", { className: "Banner", children: [_jsx(motion.div, { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: 'spring', delay: .1 }, children: _jsxs(Swiper, { modules: [Navigation], navigation: true, loop: true, spaceBetween: 80, slidesPerView: 'auto', centeredSlides: true, pagination: {
                        clickable: true,
                        bulletClass: 'dot',
                        bulletActiveClass: 'active'
                    }, onSlideChangeTransitionStart: e => setDotIndex(e.realIndex % 3), children: [_jsx("div", { className: "img-line0", style: { top: 0 } }), _jsx("div", { className: "img-line0", style: { bottom: 0 } }), arr(3).map(el => (_jsx(SwiperSlide, { className: `img-banner${el}` }, el))), arr(3).map(el => (_jsx(SwiperSlide, { className: `img-banner${el}` }, el))), _jsx("div", { className: "dot-content", children: arr(3).map(el => (_jsx("div", { className: `dot ${el === dotIndex ? 'img-dotAc' : 'img-dot'}` }, el))) })] }) }), _jsx(motion.div, { className: "img-bulletin", initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: 'spring', delay: .2 }, children: _jsx("div", { className: "bulletin-content", children: _jsx("div", { className: "bulletin-scroll", style: { animationDuration: scrollWidth / contentWidth * 13 + 8 + 's', animationIterationCount: 'infinite' }, children: noticeList.map(el => (_jsx("span", { className: "span", children: el.infoText }, el.noticeId))) }) }) })] }));
}
export default Banner;
