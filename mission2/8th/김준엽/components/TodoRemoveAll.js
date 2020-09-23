export default function TodoRemoveAll($target) {
    this.render = () => {
        let $div = document.createElement('div');
        let $delBtn = document.createElement('button');
        $delBtn.innerText = '모두삭제';
        $div.appendChild($delBtn);
        $target.appendChild($div);

        //event
        $delBtn.addEventListener('click', (e) => {
            const removeAllEvent = new CustomEvent('removeAll')
            $target.dispatchEvent(removeAllEvent)
        })
    }

    this.render();
}