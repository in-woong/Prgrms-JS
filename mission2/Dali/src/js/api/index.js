const baseUrl = `https://jjalbot.com/api/jjals`


const getJJalByKeyWord = async (keyword)=> {
  try {
    const response = await fetch(`${baseUrl}?text=${keyword}`);
    const jjalData = await response.json();
    return  jjalData;
  }
  catch(error){
    console.error('error:', error);
  }
}

export {
  getJJalByKeyWord,
}
