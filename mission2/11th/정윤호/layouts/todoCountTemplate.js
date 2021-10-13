const todoCountTemplate = ({ totalCount, completedCount }) => {
  return `
	<p class="total-count">총 갯수 : ${totalCount}</p>
	<p class="completed-count"> 완료 갯수 : ${completedCount}</p>
	`
}

export default todoCountTemplate
