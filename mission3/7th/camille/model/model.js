const URL = 'https://jjalbot.com/api/jjals'
const option = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

async function getData(inputValue) {
  if (inputValue.length === 0) {
    return
  }
  try {
    const response = await fetch(`${URL}?text=${inputValue}`, option)
    return await response.json()
  } catch (e) {
    console.log(e)
  }
}

export default getData
