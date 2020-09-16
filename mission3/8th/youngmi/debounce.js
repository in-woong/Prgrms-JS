function debounce(cb, time) {
    let timer;
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        cb;
    }, time);
}
export default debounce;




// 함수,,, 생성자함수,,,
