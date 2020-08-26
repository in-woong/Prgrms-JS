function isLoading(waitingStatus) {
    const loadingBOX = document.querySelector('.loading-gif-wrap')

    function onLoadingGIF() {
        loadingBOX.style.display = 'block'
    }

    function offLoadingGIF() {
        loadingBOX.style.display = 'none'
    }

    waitingStatus ? onLoadingGIF() : offLoadingGIF()
}
export default isLoading
