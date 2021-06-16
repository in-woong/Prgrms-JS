function fetchData(searchText){
  return fetch(`https://jjalbot.com/api/jjals?text=${searchText}`)
  .then(response => response.json());
}


async function getData(searchText){
  try{
    const responseData = await fetchData(searchText);
    return responseData;
  }
  catch(error){
    throw new Error(error);
  }
};

export default getData;
