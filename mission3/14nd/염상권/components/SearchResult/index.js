
export class SearchResult {
    constructor({ $target, memeLists }) {
        this.$target = $target;
        this.memeLists = memeLists;

        this.render();
    }

    generateHTML() {
        return `
            <ul>
                ${
                    this.memeLists.map(({title, imageUrl, tags, hash }) => {
                        return (
                            `<li id=${hash}>
                                <h3>${title}</h3>
                                <img src="${imageUrl}" alt="${title}" />
                                <div>${tags.filter(tag => tag)
                                           .map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            </li>`
                        )        
                    }).join('')
                }
            </ul>
        `
    }

    render() {
        this.$target.innerHTML = this.generateHTML();
    }

    setState({ memeLists }) { 
        this.memeLists = memeLists;
        this.render();
    }
}
