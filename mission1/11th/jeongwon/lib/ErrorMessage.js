const ErrorMessage = {
    DATA_IS_ERROR : (data, validate) => `${data}가 ${validate}입니다.`,
    DATA_IS_NOT_ERROR : (data, validate) =>`${data}가 ${validate} 가 아닙니다.`,
    DATA_HAS_NOT_ERROR:(data, property) => `${data}가 ${property} 를 가지고 있지 않습니다.`,
    SET_NEW_ERROR: `new를 설정해 주세요`,
}

export default ErrorMessage;