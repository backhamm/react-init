export const arr = num => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i);
    }
    return arr;
};
export const img = () => {
};
export const formatNum = val => {
    const num = Number(val);
    if (num || num === 0) {
        return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    else {
        return val;
    }
};
export const getLocationParams = key => {
    const search = window.location.search.slice(1);
    const params = {};
    search.split('&').forEach(el => {
        const arr = el.split('=');
        params[arr[0]] = arr[1];
    });
    return key ? params[key] : params;
};
