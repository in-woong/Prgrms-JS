const getData = (key) => {
    try {
        const data = JSON.parse(localStorage.getItem(key)) || null;
        return data;
    } catch(e) {
        alert('데이터를 정상적으로 파싱하지 못했습니다');
        console.error('데이터를 정상적으로 파싱하지 못했습니다.');
    }
}

const setData = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value)); 
    } catch(e) {
        alert('데이터가 정상적으로 저장되지 않았습니다.');
    }
    
}

export { getData, setData };
