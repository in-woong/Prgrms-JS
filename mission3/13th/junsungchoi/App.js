import SearchHistory from "./components/SearchHistory.js";
import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ErrorMessage from "./components/ErrorMessage.js";
import { api } from "./api.js";

export default function App({ $target }) {
  this.$target = $target;
  this.state = {
    inputValue: '',
    jjals: [],
    errorMessage: '',
    searchHistory: [],
  };

  const searchHistory = new SearchHistory({
    $target: this.$target,
    initialState: this.state,
    onClickHistory: async (value) => {
      const data = await api.searchJJals(value);

      this.setState({
        ...this.state,
        errorMessage: '',
        inputValue: value,
        jjals: data,
      });
    }
  });

  const searchInput = new SearchInput({
    $target: this.$target,
    initialState: this.state,
    onSearch: async (value) => {
      this.setState({
        ...this.state,
        inputValue: value,
      });

      if (value.trim() === '') {
        this.setState({
          ...this.state,
          errorMessage: '빈 칸을 입력할 수 없습니다.',
        })
        return;
      }
      
      const data = await api.searchJJals(value);

      if (data.length === 0) {
        this.setState({
          ...this.state,
          errorMessage: '검색 결과가 없습니다.',
        })
        return;
      }

      this.setState({
        inputValue: value,
        errorMessage: '',
        jjals: data,
        searchHistory: [
          ...this.state.searchHistory,
          value,
        ],
      });
    },
  });

  const errorMessage = new ErrorMessage({
    $target: this.$target,
    initialState: this.state,
  })

  const searchResult = new SearchResult({
    $target: this.$target,
    initialState: this.state,
  });

  this.setState = function(nextState) {
    this.state = nextState;
    searchHistory.setState(nextState);
    searchInput.setState(nextState);
    searchResult.setState(nextState);
    errorMessage.setState(nextState);
  };
};
