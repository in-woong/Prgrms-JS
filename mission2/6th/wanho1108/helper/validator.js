export const isObjectType = (data, type) => {
  if (typeof type !== 'string') {
    throw new Error('타입이 스트링 타입이 아닙니다.')
  }

  return (
    toString.call(data).slice(8, -1).toLocaleLowerCase() ===
    type.toLocaleLowerCase()
  )
}
