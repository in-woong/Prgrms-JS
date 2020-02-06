function SearchHistory({$target, data, onClick}) {
    this.data;

    this.init = () => {
        $target.addEventListener('click', e => {
            if (e.target === $target) return;
            onClick(e.target.getAttribute('data-value'), true);
        });
        this.data = data;
        this.render();
    }

    this.setState = newData => {
        this.data = newData;
        this.render();
    }

    this.render = () => {
        $target.innerHTML = this.data.map(keyword => `
            <div class="history-item" data-value=${keyword}>${keyword}</div>
        `).join('');
    }

    this.init();
}

export default SearchHistory;
