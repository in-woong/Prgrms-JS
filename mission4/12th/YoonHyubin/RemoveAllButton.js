export default function RemoveAllButton(params) {
    const $target = document.createElement('div');
    params.$target.appendChild($target);
    
    const onRemoveAll = params.onRemoveAll;

    this.render = function () {
        if (this.isDisabled) {
            $target.innerHTML = '';
        } else {
            $target.innerHTML = `<button>Remove all</button`;
        }
    }

    this.setDisabled = function (isDisabled) {
        this.isDisabled = isDisabled;
        this.render();
    }

    $target.addEventListener('click', function (e) {
        onRemoveAll();
    });
}

