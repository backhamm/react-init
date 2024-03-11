export const gameMotion = {
    container: {
        visible: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    },

    item: {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },
};

export const textMotion = {
    container: {
        visible: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.03,
            },
        },
    },

    item: {
        hidden: { left: localStorage.getItem('isH5') === 'true' ? 40 : 120, opacity: 0 },
        visible: { left: 0, opacity: 1 },
    },
};