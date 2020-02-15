function ListTitle({title, $target}) {
    this.render = () => {
        const listTitle = document.createElement('h2');
        listTitle.innerText = title;
        $target.appendChild(listTitle);
    }
    this.render();
}
