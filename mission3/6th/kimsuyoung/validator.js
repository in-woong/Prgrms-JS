export const validateData = (data) => {
  if (!data) {
    //console.error('data를 입력하세요')
    throw new Error('validateData Error')
  }
}

export const validateElement = ($element) => {
  if (!($element instanceof HTMLElement)) {
    throw new Error('validateElement Error')
  }
}

export const validateAPI = (response) => {
  if (!response.ok) {
    throw new Error('validateAPI Error')
  }
}
