export const validateFor = (newState) => {
  // state 데이터 키값 존재 확인
  if (!newState.hasOwnProperty('currentKeyword')) {
    throw new Error(`currentKeyword 키가 존재하지 않습니다.`)
  }

  if (!newState.hasOwnProperty('zzalData')) {
    throw new Error(`zzalData 키가 존재하지 않습니다.`)
  }

  if (!newState.hasOwnProperty('keywords')) {
    throw new Error(`keywords 키가 존재하지 않습니다.`)
  }

  // state 에 각 데이터 타입 확인
  if (newState.hasOwnProperty('currentKeyword') && typeof newState.currentKeyword !== 'string') {
    throw new Error(`currentKeyword 에 해당하는 값이 string 이 아닙니다. (현재 타입 : ${typeof newState.currentKeyword})`)
  }

  if (newState.hasOwnProperty('zzalData') && !Array.isArray(newState.zzalData)) {
    throw new Error(`zzalData 에 해당하는 값이 string 이 아닙니다. (현재 타입 : ${typeof newState.zzalData})`)
  }

  if (newState.hasOwnProperty('keywords') && !Array.isArray(newState.keywords)) {
    throw new Error(`keywords 에 해당하는 값이 string 이 아닙니다. (현재 타입 : ${typeof newState.keywords})`)
  }
}
