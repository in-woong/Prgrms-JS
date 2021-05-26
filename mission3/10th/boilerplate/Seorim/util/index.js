const $ = target => {
  return document.querySelector(target)
}

const objectToQueryString = parameters => {
    const queries = []  //레퍼런스가 변경되는 코드가 없으므로 let => const로 수정함
    
    for(let key in parameters){
        queries.push(`${key}=${parameters[key]}`)
    }

    console.log('결과:',queries.join('&'))

    return queries.join('&')
}

export { $,objectToQueryString }
