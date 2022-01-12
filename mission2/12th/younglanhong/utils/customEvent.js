export const customRemoveAll = ($target, parentNode) => {
  // 커스텀 이벤트 생성
  const removeAll = document.createEvent('CustomEvent')

  // 커스텀 이벤트 상세 설정
  removeAll.initCustomEvent('removeAll', true, false, { detail: { name: '전체 삭제' } })

  // 🔥CustomEvent IE 미지원
  // const removeAll = new CustomEvent('removeAll', { 
  //   bubbles: true, captures: false, detail: { name: '전체 삭제' } })

  // 커스텀 이벤트에 대한 이벤트 리스너 생성
  $target.addEventListener('removeAll', (e) => {
    const childNode = parentNode.children[0] // $(.todo-list-items)
    parentNode.removeChild(childNode)
  })
  return removeAll
}

