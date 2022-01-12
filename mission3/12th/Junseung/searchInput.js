function SearchInput({$target, setInputState}){

    this.$target = $target;
    this.setInputState = setInputState;

    this.inputEvent = () => {
        let timer = null;

        this.$target.addEventListener("input", (e) => {
            
            timer = this.setInputState(timer, e.target.value);
        })
    }

    // 이벤트 실행
    this.inputEvent();
}

export default SearchInput;