// 얼마나 많은 시간이 남았는 지 랜더링하기
export function renderHowManyTimeLeft() {
  const secondsUntilLoading = document.querySelector('#seconds-until-loading')
  const secondsUntilLoadingH1 = document.createElement('h1')
  let timeLeftSecond = 3

  secondsUntilLoading.appendChild(secondsUntilLoadingH1)
  secondsUntilLoadingH1.innerText = `데이터 로딩까지 ${timeLeftSecond}초 남았습니다.`

  const announceTimeLeftId = setInterval(() => {
    timeLeftSecond--
    if (timeLeftSecond < 1) {
      clearInterval(announceTimeLeftId)
      secondsUntilLoadingH1.innerText = ''
    }
    if (timeLeftSecond >= 1)
      secondsUntilLoadingH1.innerText = `데이터 로딩까지 ${timeLeftSecond}초 남았습니다.`
  }, 1000)
}

// 에러 핸들러
export function errorHandler(error) {
  console.log(error)
}
