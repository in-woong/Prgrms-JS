//Validator.js

const validateSelector = $selector => {
  const $target = document.querySelector($selector)
  if (!$target) {
    throw new Error('존재하지 않는 엘리먼트 입니다')
  }
}

const validateData = data => {
  if (!data) {
    throw new Error('Data를 입력해야합니다.')
  }

  for (let key of data) {
    if (!('imageUrl' in key)) {
      throw new Error('올바른 데이터가 아닙니다')
    }
  }
}
