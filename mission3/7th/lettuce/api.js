export async function getDataFromjjalbot(text) {
  const res = await fetch(`https://jjalbot.com/api/jjals?text=${text}`);
  return await res.json();
}
