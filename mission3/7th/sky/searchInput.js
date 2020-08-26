import { debounce } from "./util.js";

function SearchInput({
    elementId,
    searchJjals
}) {
    if(!new.target) {
        throw new Error(elementId);
    }

    this.$searchInput = document.getElementById(elementId);

    this.timer = null;

    this.render = () => {
        this.$inputTag = document.createElement('input');
        this.$inputTag.type = "text";
        this.$searchInput.appendChild(this.$inputTag);
    }

    this.inputHandler = debounce(evt => searchJjals(evt.target.value.trim()));

    this.bindEventListener = () => {
        
    }

    this.render();
    this.$inputTag.addEventListener('keyup', this.inputHandler);
}

export default SearchInput;
