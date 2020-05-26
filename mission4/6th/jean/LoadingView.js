export default function LoadingView ({ $target, isLoading, $todo, $completed }) {
  this.setState = (nextLoading) => {
    this.isLoading = nextLoading
    this.render()
  }

  this.render = () => {
    $target.innerHTML = this.isLoading ? 'Loading...' : ''
  }
}
