import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {motion} from "framer-motion";
import {arr} from "@/utils/func";
import {getNotice} from "@/api";
import './index.scss'

function Banner() {
    const [contentWidth, setContentWidth] = useState(null)
    const [scrollWidth, setScrollWidth] = useState(null)
    const [dotIndex, setDotIndex] = useState(0)
    const [noticeList, setNoticeList] = useState([])

    useEffect(() => {
        setContentWidth(document.getElementsByClassName('bulletin-content')[0].clientWidth)
        setScrollWidth(document.getElementsByClassName('bulletin-scroll')[0].clientWidth)

        getNotice().then(res => {
            setNoticeList(res.data)
        })
    }, [])

    return (
        <div className="Banner">
            <motion.div
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', delay: .1}}
            >
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop
                    spaceBetween={80}
                    slidesPerView={'auto'}
                    centeredSlides
                    pagination={{
                        clickable: true,
                        bulletClass: 'dot',
                        bulletActiveClass: 'active'
                    }}
                    onSlideChangeTransitionStart={e => setDotIndex(e.realIndex % 3)}
                >
                    <div className="img-line0" style={{top: 0}} />
                    <div className="img-line0" style={{bottom: 0}} />
                    {arr(3).map(el => (
                        <SwiperSlide key={el} className={`img-banner${el}`} />
                    ))}
                    {arr(3).map(el => (
                        <SwiperSlide key={el} className={`img-banner${el}`} />
                    ))}
                    <div className="dot-content">
                        {arr(3).map(el => (
                            <div key={el} className={`dot ${el === dotIndex ? 'img-dotAc' : 'img-dot'}`} />
                        ))}
                    </div>
                </Swiper>
            </motion.div>
            <motion.div
                className="img-bulletin"
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', delay: .2}}
            >
                <div className="bulletin-content">
                    <div
                        className="bulletin-scroll"
                        style={{animationDuration:  scrollWidth / contentWidth * 13 + 8 + 's', animationIterationCount: 'infinite' }}
                    >
                        {noticeList.map(el => (
                            <span key={el.noticeId} className="span">{el.infoText}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Banner