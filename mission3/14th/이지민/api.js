export default async function API(searchText) {
  try {
    const fetchData = await fetch(
      `https://jjalbot.com/api/jjals?text=${searchText}`
    );
    const result = fetchData.json();
    return result;
  } catch (e) {
    console.log('에러!');
  }
}
