async function fetchJjalbotList(paramText) {
  try {
    const response = await fetch(`https://jjalbot.com/api/jjals?text=${paramText}`);
    return response.json();
  } catch(error) {
    console.log(error);
    alert('API 오류입니다.');
  }
}

export { fetchJjalbotList };
