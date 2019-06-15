const ERROR_TO_USER = {
  TRY_AGAIN_LATER: `에러가 발생하였습니다 잠시후에 다시 시도해주세요`,
};
const ERROR_TYPE = {
  REQUIRED_ARRAY: `data가 Array가 아닙니다`,
  REQUIRED_FUNCTION: `data가 Function이 아닙니다.`,
};


const HTTP_ERROR = {
  504: 'GATEWAY TIMEOUT',
  500: "서버에서 일시적인 오류가 발생하였습니다",
  404: "해당 페이지는 없습니다."
};

export {
  ERROR_TO_USER,
  HTTP_ERROR,
  ERROR_TYPE
}
