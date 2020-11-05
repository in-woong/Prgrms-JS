/**
 * 
 * @param {text} text 
 * text 형식인 boolean 값을 boolean 으로 리턴한다.
 */
export const convertBoolean = (text) => {
    return JSON.parse(text.toLowerCase());
}