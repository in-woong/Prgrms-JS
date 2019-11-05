export let data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
  {
    text: 'JS 공부 더 하기',
    isCompleted: false,
  },
  {
    text: '코드리뷰 보기이이',
    isCompleted: false,
  },
]

export const setData = newData => {
  data = newData
  console.log(data)
}
