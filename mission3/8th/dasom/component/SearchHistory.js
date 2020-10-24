export default function SearchHistory($target, goSearch){
    this.$target = $target;

    this.addHistoryEventListener = () => {
        this.$target.addEventListener('click', (e) => {
            window.dispatchEvent(new CustomEvent('go-search', {detail: {
                searchWord: e.target.innerText, isKeydown: false}}));
        })
    }

    this.render = (historyData) => {
        $target.innerHTML = historyData.map(data => `<li>${data}</li>`).join(' ');
    }

    this.addHistoryEventListener();
}