const searchResult = new SearchResult([], '#search-result');

const fetchFn = async function(e) {
    const jjalPromise = await fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`);
    const jjalJsonFn = function (jjalPromise) {
        return jjalPromise.json();
    };
    const jjalJson = await jjalJsonFn(jjalPromise);
    const jjal = function(jjalJson) {
        searchResult.setState(jjalJson);
    };
    await jjal(jjalJson);
}
