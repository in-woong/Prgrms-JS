export default function ErrorViewer({ $target }) {
    this.render = function () {
        $target.innerHTML = `데이터 로드를 실패하였습니다!`
    }
}
