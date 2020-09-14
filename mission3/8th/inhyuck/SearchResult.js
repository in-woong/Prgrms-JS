export default function SearchResult({searchedItems}, target) {
    this.data = {searchedItems};
    this.$target = document.querySelector(target);

    this.render = function () {
        this.$target.innerHTML = `
            <ul>
              ${this.data.searchedItems.map(searchedItem => `
                    <li class="img">
                        <img src="${searchedItem.imageUrl}" alt="${searchedItem.title}">
                    </li>
                `).join('')}
            </ul> 
        `;
    };

    this.setState = function ({searchedItems}) {
        this.data = {searchedItems};
        this.render();
    };

    this.render();
}
