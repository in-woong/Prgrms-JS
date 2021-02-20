const jjalbotAPI = async (value) =>{
  const dataResponse = await fetch(`https://jjalbot.com/api/jjals?text=${value}`);
  if (!dataResponse.ok) {
    throw new Error(error); 
  }
  return await dataResponse.json();
}

export default jjalbotAPI;
