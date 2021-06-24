const HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}

export default function (thrownObject, customMessage = '요청에 실패했습니다.') {
  if (thrownObject instanceof Response) {
    let errorMessage = ''

    switch (thrownObject.status) {
      case HTTP_STATUS_CODE.BAD_REQUEST:
        errorMessage = '잘못된 요청입니다.'
        break
      case HTTP_STATUS_CODE.UNAUTHORIZED:
        errorMessage = '사용자 인증에 실패했습니다.'
        break
      case HTTP_STATUS_CODE.FORBIDDEN:
        errorMessage = '접근 권한이 없습니다.'
        break
      case HTTP_STATUS_CODE.NOT_FOUND:
        errorMessage = '찾는 리소스가 없습니다.'
        break
      case HTTP_STATUS_CODE.SERVER_ERROR:
        errorMessage = '서버 장애가 발생했습니다.'
        break
      default:
        errorMessage = `${thrownObject.status} ${thrownObject.statusText}`
    }

    console.error(errorMessage)
  } else {
    console.error(thrownObject)
  }

  alert(customMessage)
}
