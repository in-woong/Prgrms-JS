## TroubleShoot & Question Log

1. Error Handling
   밑에 catch에서 return 한 부분 throw로 안 던져도 상위에서
   받을 수 있는지? 나중에 해보기
   일단 기록

// throw하면 전파되므로 상위에서 try catch로 잡고 하위에서는 throw 해주는 구조로 수정

```js
async function request(url, options = { method: 'GET' }) {
  const baseUrl = `http://todo-api.roto.codes`;
  try {
    const res = await fetch(`${baseUrl}/${url}`, options).json();
    const data = await res.json();
    if (res.ok) {
      return {
        isError: false,
        data,
      };
    } else {
      return {
        isError: true,
        message: data.message,
        statusCode: data.status,
      };
    }
  } catch (err) {
    return {
      isError: true,
      message: data.message,
      statusCode: data.status,
    };
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

4) 가지고 온 Users Validate  
   나도 범인인듯 'ㅁ';
   //0: "rotoa"
   // 1: "undefined"
   // 2: "cckn"
   // 3: "React-Study"
   // 4: "dali"
   // 5: "Fp-Study"
   // 6: "VueJs-Study"
   // 7: "Resume-Update"
   // 8: "update-Resume"
   // 9: "gyoon"
   // 10: "kangho"
   // 11: "fseller"
   // 나도 범인인데 ... validate

### 0723 리뷰 반영

1. option -> 많이 쓰는 부분은 default 처리
2. requestHelper라고 만들어 놓은 부분 ->
   request 안에서 그런 처리를 할 수 있도록 하는 편이 더 직관적일 것 같다는 피드백 :D
   ㅇㅅㅇ 그러넹 !!

#### 1차 수정후

1. 에러 핸들링 전파가 제대로 안 되고 있는 것 같다 ->
   왜

```
main.js
try {
  // 여기서 error throw하는 구조인데 ? 다시 살펴봐야 겠다.
}catch(e){
  HttpErrorHandler(e)
}

```

2. request함수 refactor -> request안에서 before
   finish를 추가하도록 수정하긴 했는데
   -> request를 확장해 가는 함수들도 거창하게 계속 {url, before} 이렇게 받아서 이어가며 써줘야 하는데.. 음 더 사용성 좋게 만들 수 있는 고민필요

### 백로그

0. 웹팩 적용
1. example -> node 및 서버 내가 직접 추가 + 배포
1. todoList는 늘 deadLine 및 캘린더?... 일정이랑 연결이
1. +\_+ label을 만들 수 있고 -> 그리고 label로 분류 -> tag들을 넣을 수 있다.
1. notification -> 알림탭 -> 이게 이곳 저곳 상태를 왔다갔다
