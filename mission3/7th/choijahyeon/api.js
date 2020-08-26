import { apiUrl } from './utils.js'

function getImagesFromApi(keyword) {
  return fetch(`${apiUrl}?text=${keyword}`).then((x) => x.json())
}

export default {
  getImagesFromApi,
}
