const initialUserName = 'aug9';
let userName = initialUserName;

export function isReadOnly() {
    return userName !== initialUserName;
}

export function checkReadOnly() {
    if (isReadOnly()) makeError(`초기 설정된 사용자(${initialUserName}})만 수정 가능합니다.`);
}

export function makeError(message) {
    alert(message);
    throw new Error(message);
}

export function changeUser(newUserName) {
    if (isInvalidString(newUserName)) makeError('입력된 userName값이 정상적인 문자열이 아닙니다.');
    userName = newUserName;
}

export function getUserName() {
    return userName;
}

export function setLoading(isLoading) {
    document.querySelector('#loading').style.visibility = isLoading ? 'visible' : 'hidden';
}

export function isInvalidString(str) {
    return str === null || str === undefined || typeof(str) !== 'string' || str.length == 0;
}
