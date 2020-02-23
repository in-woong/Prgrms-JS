const getData = (key) => {
    try {
        const data = JSON.parse(localStorage.getItem(key)) || null;
        return data;
    } catch(e) {
        console.error('데이터를 정상적으로 파싱하지 못했습니다.');
    }
}

export { getData };
