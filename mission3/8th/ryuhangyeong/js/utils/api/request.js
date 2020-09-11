const request = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.length) {
          reject(new Error('검색 결과가 존재하지 않습니다.'))
          return
        }
        resolve(data)
      })
      .catch((e) => reject(e))
  })
