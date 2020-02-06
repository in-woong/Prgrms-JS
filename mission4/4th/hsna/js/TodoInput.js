export default function TodoInput(params) {
  const $target = params.$target
  const $targetRemoveBtn = params.$targetRemoveBtn
  const onClick = params.onClick

  $targetRemoveBtn.addEventListener('click', e => {
    onClick($target.value)
    $target.value = ''
  })
}
