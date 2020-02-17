function checkData(data) {
  if (!data) {
    throw new Error('Data를 입력해주세요')
  }
  if (!Array.isArray(data)) {
    throw new Error('Data가 배열이 아닙니다')
  }

  //   if (data.length <= 0) {
  //     throw new Error('Data가 빈 배열입니다')
  //   }

  for (const item of data) {
    if (
      !item.text ||
      !item.hasOwnProperty('isCompleted') ||
      typeof item.text !== 'string'
    ) {
      throw new Error('Data안의 데이터들이 올바르지 않습니다.')
    }
  }
}
function checkTarget($target) {
  if ($target === null) {
    throw new Error('해당 엘리먼트가 존재하지 않습니다')
  }
}
