const searchResult = new SearchResult([], '#search-result');

const fetchFn = async function (targetValue) {
    const jjalPromise = await fetch(`https://jjalbot.com/api/jjals?text=${targetValue}`);
    const jjalJsonFn = function (jjalPromise) {
        return jjalPromise.json();
    };
    const jjalJson = await jjalJsonFn(jjalPromise);
    const jjal = function (jjalJson) {
        searchResult.setState(jjalJson);
    };
    await jjal(jjalJson);
}
// 피드백 3. fetchFn 함수는 짤을 fetch하는 함수인데 쓸데없이 이벤트 객체를 받는다.