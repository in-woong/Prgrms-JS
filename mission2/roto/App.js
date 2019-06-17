const SEARCH_INPUT_CLASS_NAME = "search-input";
const SEARCH_RESULT_CLASS_NAME = "search-result";

function App($target) {
  let initialized = false;

  this.searchResult = null;
  this.searchInput = null;

  this.initialize = function() {
    if (!initialized) {
      $target.innerHTML = `<input class="${SEARCH_INPUT_CLASS_NAME}"><div class="${SEARCH_RESULT_CLASS_NAME}"></div>`;
      this.searchResult = new SearchResult(
        $target.querySelector(`.${SEARCH_RESULT_CLASS_NAME}`)
      );

      // SearchInput 컴포넌트를 생성. 두 번째 파라메터로 input이 change 될 때마다 실행될 콜백 함수를 설정하고,
      // 해당 함수에서 데이터 조회 및 searchResult의 state 변경 처리를 한다.
      this.searchInput = new SearchInput(
        $target.querySelector(`.${SEARCH_INPUT_CLASS_NAME}`),
        async function onChange(keyword) {
          try {
            this.searchResult.setState({
              isLoading: true,
              images: [],
            });
            const images = await fetchJjal(keyword);
            this.searchResult.setState({
              isLoading: false,
              keyword: keyword,
              images: images,
            });
          } catch (error) {
            this.searchResult.setState({
              isLoading: false,
              error: error,
              images: [],
            });
          }
        }.bind(this)
      );

      initialized = true;
    }
  };

  this.render = function() {
    if (!initialized) {
      this.initialize();
    }
  };

  this.render();
}
