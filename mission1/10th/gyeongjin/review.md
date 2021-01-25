# Mission1 Review

## Review1
* 문제 : head 태그에서 부르게 되면 main.js가 불리고 로드되는 동안 렌더링이 블로킹
* 해결방법
    1. script의 위치변경
    2. script 태그에 async 속성 추가
* 해결 : script에 async 속성 추가
* 참고문헌 [async와 defer의 차이](https://blog.asamaru.net/2017/05/04/script-async-defer/)

---

## Review2
* 문제 : EOL이 없으면 문서가 끝나지 않은것으로 간주
* 모든 파일에 EOL( End of Line ) 추가
* 해결방법
    * 비어있는 한줄 생성
* 해결 : enter

---

## Review3
* 문제 : 반복문 map은 immutable array를 만들때 사용함
* 해결방법
    * forEach를 사용
    * some을 사용
* 해결 : map() -> some()
* 참고문헌 [some mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
    * `some()`은 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트

---

## Review4
* 문제 : 렌더링, 리렌더링 될때마다 DOM Search가 되는 현상
* 해결방법 
    * 변수 `querySelector('#app')`, `createElement('div')`를 `render()` 밖으로 이동
* 해결 : 변수들을 `constructor{}` 안으로 이동

---

## Review5
* 문제 : innerHTML을 여러번 사용해서 실행시 reflow(리렌더링)이 일어나는 현상 
* 해결방법
    * innerHTML은 한번만 사용
        1. 변수를 만들어서 변수에 넣어준 후에 innerHTML() 사용 
        2. `map()` 함수에 `.join()` 사용
* 해결 : 제목과 컨텐츠 변수를 선언해서 마지막에 innerHTML을 한번만 사용

---

## Review6
* 문제 : 인스턴스화 할 때에도 setState를 사용
* 해결방법 
    * 인스턴스화 할 때 선언하면 `render()`와 `setState()` 한번에 실행되도록 변경
* 해결 : `constructor(){}` 파라미터에 `nextData`를 인자로 주어 인스턴스에서 `setState()`를 생략할 수 있도록 변경

---

## 추가 변경사항
* 메세지를 상수로 분리
* 변수명 구체적으로 변경 ( data -> listData, container -> listBox )
* prettier 적용
