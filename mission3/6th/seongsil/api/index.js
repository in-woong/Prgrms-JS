const fetchJjalbotList = (paramText) => {
  try {
    fetch(`https://jjalbot.com/api/jjals?text=${paramText}`)
      .then(value => value.json())
      .then(data => {
        console.log(data);
        return data;
      });
  } catch(error) {
    console.log(error);
    alert('API 오류입니다.');
  }
}

export { fetchJjalbotList };
