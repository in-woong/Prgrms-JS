const debounce = ( targetFunction, debounceTime) => {
    let timeoutId = null;

    return (...args) => {
        const calledLater = () => {
            clearTimeout(timeoutId);
            timeoutId = null;
            return targetFunction(...args);
        }

        if(timeoutId) {
            return
        }

        timeoutId = setTimeout(calledLater, debounceTime);
    }
}

const getData = (key) => {
    try {
        const data = JSON.parse(localStorage.getItem(key)) || null;
        return data;
    } catch(e) {
        alert('데이터를 정상적으로 파싱하지 못했습니다');
        console.error('데이터를 정상적으로 파싱하지 못했습니다.');
        return null;
    }
}

const setData = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value)); 
    } catch(e) {
        alert('데이터가 정상적으로 저장되지 않았습니다.');
    }
}

export { debounce, getData, setData }
