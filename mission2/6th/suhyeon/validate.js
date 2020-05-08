const validateData = (data) => {
    if (!data) { throw new Error('데이터가 없습니다.') }
    if (!Array.isArray(data)) { throw new Error('배열 형태가 아닙니다.') }
    return data
}
const validateElement = (element) => {
    if (!element) { throw new Error(`요소가 존재하지 않습니다.`) }
    return element
}
