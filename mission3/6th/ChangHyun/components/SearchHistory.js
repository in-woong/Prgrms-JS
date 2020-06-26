export default function SearchHistory(
  $target,
  className,
  historyClickHandler,
  HISTORYLENGTH,
  queries = {}
) {
  this.queries = queries
  this.history = []
  this.$el = document.createElement('ul')
  this.$el.className = className
  this.$target = $target

  this.render = () => {
    this.$el.innerHTML = ''
    this.history.forEach((query, i) => {
      /* this.$el.append(<li>)
        <li data-id=${i} data-count=${this.queries[query]}>
        <p>${query}</p>
        <button>x</button>
        </li>
        */
      // used textContent to prevent XSS attack
      const li = document.createElement('li')
      li.dataset.id = i
      li.dataset.count = this.queries[query]

      const p = document.createElement('p')
      p.textContent = query
      const button = document.createElement('button')
      button.textContent = 'x'
      button.addEventListener('click', (e) => {
        delete this.queries[query]
        e.target.parentElement.remove()
        e.stopPropagation()
      })
      li.appendChild(p)
      li.appendChild(button)
      this.$el.appendChild(li)
    })

    this.$target.appendChild(this.$el)
  }

  this.bindEvent = () => {
    this.$el.addEventListener('click', historyClickHandler)
  }

  this.setState = (newQuery) => {
    if (!this.queries[newQuery]) {
      this.queries[newQuery] = 1
    } else {
      this.queries[newQuery]++
    }
    if (this.history.length < HISTORYLENGTH) {
      !this.history.includes(newQuery) && this.history.push(newQuery)
    } else {
      this.history = this.history.includes(newQuery)
        ? [...this.history.filter((i) => i !== newQuery), newQuery]
        : [...this.history.splice(1), newQuery]
    }

    this.render()
  }
}
