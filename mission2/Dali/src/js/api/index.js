import utils from '../utils/index.js';
import { HTTPERROR } from '../utils/errorMessage.js';

const baseUrl = `https://jjalbot.com/api/jjals`;



const getJJalByKeyWord = async (keyword)=> {
  try {
    const response = await fetch(`${baseUrl}?text=${keyword}`);
    const jjalData = await response.json();
    return  jjalData;
  }
  catch(error){
    console.log('error:', error);
  }
};

export {
  getJJalByKeyWord,
};
