# 컴포넌트별 설명

- `App`
  - 전체적인 애플리케이션의 구조 및 데이터 흐름을 담당한다.
  - 애플리케이션에 필요한 `SearchInput`, `SearchResult` 컴포넌트를 생성한다.
    - `SearchInput`에서 입력 데이터가 변경되면 api를 통해 짤봇 데이터를 검색하고, 검색한 데이터를 `SearchResult`에 넘긴다.
- `SearchInput`
  - 검색어 입력 시 관련된 처리를 한다.
- `SearchResult`
  - 짤봇 이미지 검색 결과 데이터를 받아 화면에 이미지 목록을 그린다.