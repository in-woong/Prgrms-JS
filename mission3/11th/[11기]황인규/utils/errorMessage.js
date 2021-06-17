export const errorMessage = {
    CHECK_VALIDATE_IS : (data, validate) => `${data}가 ${validate}입니다.`,
    CHECK_VALIDATE_IS_NOT : (data, validate) => `${data}가 ${validate}입니다.`,
    CHECK_HAS_NOT : (data, property) => `${data}가 ${property}를 가지고 있지 않습니다.`,
    CHECK_NEW_ERROR : () => `new로 생성해주세요.`
}