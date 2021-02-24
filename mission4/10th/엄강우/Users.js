export default function Users(params) {
    this.$target = params.$users
    this.fetchData = params.fetchData

    this.$target.addEventListener('click', (e) => {
        this.fetchData(e.target.dataset.name)
    })

    this.render = (data) => {
        const stringHTML = data.map((element) => `<li data-name="${element}">${element}</li>`)
        this.$target.innerHTML = `<ol>${stringHTML.join('')}</ol>`
    }
}
