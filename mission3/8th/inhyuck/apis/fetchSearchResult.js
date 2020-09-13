const JJALBOT_API_DOMAIN = 'https://jjalbot.com';

function fetchSearchResult({searchText}) {
    return fetch(`${JJALBOT_API_DOMAIN}/api/jjals?text=${searchText}`)
      .then(x => x.json());
}
