전체 플로우
1. input이 입력될대마다 api 호출
2. 받은 값을 렌더링한다.
3. 새로 렌더링될때는 초기화된다.


레이어
1. model
    - data (view에서 사용할 용도)
2. SearchResult (view)
    - params: data, target(element)
    - method: setState(상태 업데이트), render
3. constroller
    - change
--
1. entity
    - `jjal`
2. api service
    - http module
 

에러처리
1. 이미지 로드 에러 처리
2. api 네트워크 오류 처리
3. api 데이터 타입 및 필드 규격에 맞지 않을 경우 처리
