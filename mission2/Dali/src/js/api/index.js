const baseUrl = `https://jjalbot.com/api/jjals`;

const getJJalByKeyWord = async (keyword, errorHandler) => {
  try {
    const response = await fetch(`${baseUrl}?text=${keyword}`);
    return  await response.json();
  }
  catch(error){
    // 여기서 Error Handling 어떻게 헤야 될까?
    console.log('error:', error);
    errorHandler(error);
  }
};

export {
  getJJalByKeyWord,
};
