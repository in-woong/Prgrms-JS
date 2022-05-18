
export class SearchHistory {
    constructor({ $target, keywordHistory, onHistoryTagClick }) {
        this.$target = $target;
        this.onHistoryTagClick = onHistoryTagClick;
        this.keywordHistory = keywordHistory;
        
        this.render();
        this.registerTagClickHandler();
    }

    registerTagClickHandler() { 
        this.$target.addEventListener('click', (e) => {
            const { target: { innerText } } = e;
            this.onHistoryTagClick({ keyword: innerText });
        });
    }

    generateHTML() {
        return this.keywordHistory.map(keyword => `<span class="tag history">${keyword}</span>`).join('');
    }

    render() { 
        this.$target.innerHTML = this.generateHTML();
    }

    setState({ keywordHistory }) { 
        this.keywordHistory = keywordHistory;
        this.render();
    }
}
