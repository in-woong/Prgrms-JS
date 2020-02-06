const API_ENDPOINT_JJAL = 'https://jjalbot.com/api/jjals?text='
const API_ENDPOINT_PIXA = 'https://pixabay.com/api/?key=14349579-d64c9722120bd12300db3be53&q='


export async function fetch_json(keyword, usePixa) {
  const endpoint = usePixa ? API_ENDPOINT_PIXA : API_ENDPOINT_JJAL
  const url = `${endpoint}${keyword}`;

  console.log("pre - fetched", url);
  const res = await fetch(url)
  const data = await res.json();
  console.log("post - fetched", data);

  return data.hits;
};


export function debounce(e, gap) {
  e.preventDefault()
  if (this.timer) {
    clearTimeout(this.timer);
  }

  this.timer = setTimeout(() => {
    const val = e.target.value;
    if (val.length > 0)
      this.onSearch(val);
  }, gap);
}
