export default function TodoCount({ $target, initialState }) {
  this.state = initialState
  this.$target = $target

  this.setState = (nextState) => {
    this.state = nextState  
    // 상태 변화 시 렌더링
    this.render()
  }

  this.render = () => {
    const { totalCount, completedCount } = this.state
    
    const countTemplate = `
      <p>🔲총 개수: ${totalCount} &nbsp; ☑️완료된 개수: ${completedCount}</p>
    `
    this.$target.insertAdjacentHTML('beforeend', countTemplate)
  }
  this.render()
}
