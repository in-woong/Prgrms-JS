// 올바른 파라미터가 넘어왔는지 체크하는 함수
const testError = (input) => {
    if (!Array.isArray(input)) throw new Error("입력한 데이터가 array형식이 아닙니다.");
    input.forEach((inputItem) => {
        if (!inputItem.hasOwnProperty("content") || !inputItem.hasOwnProperty("isCompleted")){
            throw new Error("올바른 파라미터가 넘어오지 않았습니다!!");
        } 
    })
}

export {
    testError,
}