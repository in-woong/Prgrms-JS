export const validateData = (data) => {
    if (data == null) {
        throw new Error("빈 데이터입니다.")
    }

    if (!Array.isArray(data)) {
        throw new Error("배열 값만 사용할 수 있습니다.")
    }

    if (!data.every((item) => item.hasOwnProperty("content") && item.hasOwnProperty("isCompleted") && item.hasOwnProperty("_id"))) {
        throw new Error("잘못된 데이터 입니다.")
    }

    if (!data.every(({ content, isCompleted, _id }) => typeof content === "string" && typeof isCompleted === "boolean" && typeof _id === "string")) {
        throw new Error("잘못된 데이터입니다.")
    }
}
