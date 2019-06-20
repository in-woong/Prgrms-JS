const init = function() {
    document.querySelector('#search-keyword').addEventListener('keyup', function(e) {
        fetchFn(e.target.value);
    });
}
init();

