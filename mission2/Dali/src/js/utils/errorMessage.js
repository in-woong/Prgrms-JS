const ERROR_COMPONENT = {
  REQUIRED_ARRAY: `data 가 Array가 아닙니다`,
  TRY_AGAIN_LATER: `에러가 발생하였습니다 잠시후에 다시 시도해주세요`,
};

const HTTP_ERROR = {
  504: 'GATEWAY TIMEOUT',
  500: "서버에서 일시적인 오류가 발생하였습니다",
  404: "해당 페이지는 없습니다."
};

export {
  ERROR_COMPONENT,
  HTTP_ERROR
}
