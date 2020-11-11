/**
 * 
 * @param {text} string 
 * text 형식인 boolean 값을 boolean 으로 리턴한다.
 */
export const convertStringToBoolean = (text) => {
    try {
        return JSON.parse(text.toLowerCase())
    } catch (error) {
        throw new Error('string -> boolean 형변환시 오류가 발생했습니다.');
    }
}

/**
 * 
 * @param {parseData} string 
 * JSON parse를 실행한다.
 */
export const jsonParse = (parseData) => {
    try {
        return JSON.parse(parseData);
    } catch (error) {
        throw new Error('JSON parse시 오류가 발생했습니다.');
    }
}

/**
 * 
 * @param {jsonData} json 
 * JSON stringify를 실행한다.
 */
export const jsonStringify = (jsonData) => {
    try {
        return JSON.stringify(jsonData);
    } catch (error) {
        throw new Error('JSON stringify시 오류가 발생했습니다.');
    }
}
