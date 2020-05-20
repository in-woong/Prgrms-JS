function SearchHistory(selector) {
    this.data = [];
    this.$target = document.querySelector(selector);
    this.$target.addEventListener('click', (event) => {
        var target = event.target;

        if(target.getAttribute('class') === 'link') {
            const value = target.innerText;
            searchAPI.getAPIdata(value);
        }
    })

    this.createInnerHTML = function() {
        const innerText = this.data.map(({query}, index) => {
            return `<a href="#" class="link">${query}</a> `;
        }).join('');

        return innerText;
    }

    this.checkOverlap = function(value) {
        return this.data.filter(obj => {
            return obj.query === value
        }).length;
    }

    this.addData = function(value) {
        if(this.checkOverlap(value))
            return;

        this.data.push({query: value});
        this.render();
    }

    this.render = function() {
        this.$target.innerHTML = this.createInnerHTML();
    }
}