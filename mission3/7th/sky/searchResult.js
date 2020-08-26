import {formatDateTime} from './util.js';

function SearchResult({
    elementId,
    jjalData,
}) {
    if(!new.target) {
        throw new Error(elementId);
    }
    this.currentJjals = jjalData;
    this.$searchResult = document.getElementById(elementId);

    this.render = function() {
        this.$searchResult.innerHTML = 
        `<ul>
            ${this.currentJjals.map(({tags, imageUrl, updatedAt}) => 
                `
                <li>
                    <img src=${imageUrl} alt=${tags} />
                    <p>${tags.map(tag => `#${tag}`).join(" ")}</p>
                    <span>최근 업데이트: ${formatDateTime(updatedAt)}</span>
                </li>
                `
            ).join("")}
        </ul>`
    }

    this.setState = jjals => {
        this.currentJjals = [...jjals];
        this.render();
    }

    this.render();
}

export default SearchResult;
