export default async function getAPI(keyword) {
  try {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`);

    // Guard Clause
    if (!res.ok) throw new Error('잘못된 형식입니다!');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
