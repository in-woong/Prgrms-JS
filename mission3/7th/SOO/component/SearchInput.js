export default function searchInput({
    onSearch,
    target
}) {
    this.target = target
    this.target.addEventListener('keyup', async function(e) {
        onSearch(e.target.value)
    })
}
