export function isValidTarget($target) {
  if (!$target) {
    throw new Error(`Wrong Target => 유효한 element가 필요합니다.`)
  }
}

function isValideProperties(data) {
  const TEXT = 0
  const IS_COMPLETE = 1

  return data.some((item) => {
    const values = Object.values(item)
    return (
      item['text'] === undefined ||
      item['isComplete'] === undefined ||
      typeof values[TEXT] !== 'string' ||
      typeof values[IS_COMPLETE] !== 'boolean'
    )
  })
}

export function isValidData(data) {
  if (!Array.isArray(data) || !data.length) {
    throw new Error(`Wrong Array => Data의 Type과 배열의 내용을 확인해주세요.`)
  }

  if (isValideProperties(data)) {
    throw new Error(`Wrong Property => Data의 property 형식을 지켜주세요.`)
  }
}

export function displayError($target, message) {
  $target.innerText = message
}
