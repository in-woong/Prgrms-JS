function SearchHistory({$target, historyState, setResultState}){
    this.$target = $target;
    this.historyState = historyState;
    this.setResultState = setResultState;

    this.makeComponent = () => {

        const htmlHistoryString = [...this.historyState.keys()]
            .map((historyStateItem) => {
                return (
                    `
                        <li data-history-key = ${historyStateItem}>
                            ${historyStateItem}
                        </li>
                    `
                )
            })
            .join(" ");

        return `<ul>${htmlHistoryString}</ul>`;
    }

    this.setState = (newDataName, newDataArray) => {
        this.historyState.set(newDataName, newDataArray);
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML = this.makeComponent();
    }

    this.histroyClickEvent = () => {

        this.$target.addEventListener("click", (e) => {
            const { tagName, dataset } = e.target;
            const {setResultState, historyState} = this;

            if (tagName === "LI"){
                setResultState(historyState.get(dataset.historyKey));
            }
        })
    }

    this.render();
    this.histroyClickEvent();
}

export default SearchHistory;