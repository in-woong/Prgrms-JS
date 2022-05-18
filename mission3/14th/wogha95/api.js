export default async function fetchKeyword(keyword) {
  try {
    const url = `https://jjalbot.com/api/jjals?text=${keyword}`;
    const response = await fetch(url).then((x) => x.json())
      .then((data) => {
        const imageTagArray = data.map((d) => `<img src="${d.imageUrl}">`);
        return imageTagArray;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}