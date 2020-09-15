/**
 * @param {object} props
 * @param {searchItem[]} props.searchedItems
 * @param {string} props.searchedItems[].imageUrl
 * @param {string} props.searchedItems[].title
 * @param {string} target
 * @constructor
 */
export default function SearchResult(props, target) {
    this.data = props;
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
