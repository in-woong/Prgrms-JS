function SearchAPI() {
    this.getAPIdata = async function(query) {
        try {
            const postResponse = await fetch(
                `https://jjalbot.com/api/jjals?text=${query}`
            );
            const data = await postResponse.json();

            searchResult.setState(data);
            searchHistory.addData(query);
        }
        catch (err) {
            console.log('fetch failed', err);
        }
    }
}