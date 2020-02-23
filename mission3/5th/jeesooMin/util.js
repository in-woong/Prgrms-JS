const queryString = obj => {
  return Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&')
}

export { queryString }
