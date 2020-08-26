function SearchHistory(input, target) {
    let data = input;
    const element = target;
    
    render();

    function setState(input) {
        data = input;
        render();
    }

    function render() {
        const htmlString = `<p>${data}</p>`;
        element.innerHTML += htmlString;
    }
}