/**
 * 
 * @param {text} text 
 * text 형식인 boolean 값을 boolean 으로 리턴한다.
 */
export const convertStringToBoolean = (text) => {
    try {
        return JSON.parse(text.toLowerCase())
    } catch (error) {
        console.log(`error name : ${error.name}
        error message : ${error.message}
        error stack : ${error.stack}`);
    }
}
