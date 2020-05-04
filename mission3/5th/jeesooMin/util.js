export const queryString = parameterData =>
  Object.keys(parameterData)
    .map(key => `${key}=${parameterData[key]}`)
    .join('&')
