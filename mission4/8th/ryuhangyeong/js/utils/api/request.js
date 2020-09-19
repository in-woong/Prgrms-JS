const defaultOpts = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

export default async (url, opts = {}) => {
  opts = Object.assign(defaultOpts, opts)

  const res = await fetch(url, opts)

  if (res.ok) {
    return await res.json()
  } else {
    throw new Error('잘못된 요청입니다.')
  }
}
