const ERROR_MESSAGES = {
    NOT_INCLUDE_DATA: "유효하지 않은 데이터입니다.",
    INVALIDS_ISCOMPLETED_DATATYPE : "isComplted 값이 올바르지 않습니다.",
    NOT_ARRAY_DATA: "데이터 타입이 ARRAY가 아닙니다.",
    NOT_NEW: "인스턴스가 아닙니다. new 키워드를 사용해 생성자를 만들어주세요.",
    INVALID_TEXT_DATATYPE: "text 값이 null이거나 undefined입니다. 유효한 값을 입력해 주세요."
}

export default function Validate (data) {
    if(typeof data !=='string') throw new Error(ERROR_MESSAGES.NOT_INCLUDE_DATA)
}
