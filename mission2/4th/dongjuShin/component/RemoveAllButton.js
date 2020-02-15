function RemoveAllButton({text, listIndex, $target}) {
    this.btn;

    this.render = () => {
        this.btn = document.createElement('button');
        this.btn.innerText = text;
        this.btn.addEventListener('click', e => {
            e.target.dispatchEvent(new CustomEvent('removeAll', {
                bubbles: true,
                detail: {
                    listIndex: listIndex,
                }
            }));
        });
        $target.appendChild(this.btn);
    }

    this.render();
}
