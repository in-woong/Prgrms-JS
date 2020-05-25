import { API_URL } from '../utils/constants.js'
import { checkFetchManagerArgs } from '../utils/validation.js'

export default async function fetchManager({
  params, method = 'GET', body, headers,
}) {
  checkFetchManagerArgs({
    params,
    method,
    body,
    headers,
  })
  const options = {
    method,
    headers: {
      'content-Type': 'application/json',
    },
  }
  if (body) {
    options.body = JSON.stringify({ ...body })
  }
  if (headers) {
    options.headers = { ...options.headers, ...headers }
  }
  console.log(JSON.stringify({ url: API_URL + params, ...options }, null, 2))
  const response = await fetch(API_URL + params, options)
  return await response.json()
}
