## TroubleShoot & Question Log

1. Error Handling 
밑에 catch에서 return 한 부분 throw로 안 던져도 상위에서 
받을 수 있는지? 나중에 해보기 
일단 기록

// throw하면 전파되므로 상위에서 try catch로 잡고 하위에서는 throw 해주는 구조로 수정  
```js

async function request(url, options = {method: 'GET'}){
  const baseUrl = `http://todo-api.roto.codes`;
  try {
    const res = await fetch(`${baseUrl}/${url}`, options).json();
    const data = await res.json();
    if(res.ok){
      return {
        isError: false,
        data,
      }
    }else {
      return {
        isError: true,
        message: data.message,
        statusCode: data.status
      }
    }
  }catch(err){
    return {
      isError: true,
      message: data.message,
      statusCode: data.status
    }
  }
}

```

2. commonAPI 만드는 부분 위에 request함수에서 URL 처리 부분 
baseURL에서 이어 받지 않을때 username/id/toggle 
객체이면 join/을 해준다... 일단 이렇게 한 번 가보고 물어보자 
-> url만 각각의 함수로 빼준다 해결 

```js



```

3. Class를 안 쓰니 fn을 순서에 맞춰서 써야 되는 번거로움 ?
