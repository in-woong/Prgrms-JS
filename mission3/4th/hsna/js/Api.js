const API_URL = 'https://jjalbot.com/api'

export async function getImageJson (imageUrl){
  try {
    const fetchData = await fetch(`${API_URL}/jjals?text=${imageUrl}`)
    const json = await fetchData.json()
    return json
  } catch (err) {
    const $errorTarget = document.querySelector('#errorView-container')
    new ErrorViewer($errorTarget).render(err)
  }
}
