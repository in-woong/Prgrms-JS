class SearchStatus {
  constructor({ initialState }) {
    this.state = initialState;

    this.$target = document.createElement('div');
    this.$target.className = 'search-status';

    this._render();
  }

  setState(nextState) {
    this.state = nextState;
    this._render();
  }

  _render() {
    const resultCount = this.state.searchResult.length;

    if (!this.state.currentSearchTerm) {
      this.$target.innerHTML = '';
      return;
    }

    if (this.state.searchStatus.isLoading) {
      this.$target.innerHTML = `<div>'${this.state.currentSearchTerm}' 검색 중 ...</div>`;
      return;
    }

    if (this.state.searchStatus.isError) {
      this.$target.innerHTML = `<div>오류가 발생했습니다. 다시 검색해주세요</div>`;
      return;
    }

    if (!resultCount) {
      this.$target.innerHTML = `<div>'${this.state.currentSearchTerm}'에 대한 검색 결과가 없습니다</div>`;
      return;
    }

    this.$target.innerHTML = `<div>'${this.state.currentSearchTerm}'에 대한 검색 결과를 ${resultCount}개 찾았습니다</div>`;
  }
}

export default SearchStatus;
