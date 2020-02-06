import { validator } from "../utils.js";

function ErrorModal({$target}) { 
    this.addErrorItem = err => {
        validator.isString(err);
        const $item = document.createElement('div');
        $item.classList.add('error-item');
        $item.innerText = err;

        $target.appendChild($item);

        setTimeout(() => {
            $target.removeChild($item);
        }, 2000);
    }
}

export default ErrorModal;
