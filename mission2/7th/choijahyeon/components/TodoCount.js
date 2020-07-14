function TodoCount(props) {
	this.$target = props.target;
	this.totalCount = props.totalCount;
	this.completeCount = props.completeCount;
	this.$paragraph = document.createElement('p');
	this.render = function() {
		this.$paragraph.innerHTML = `${this.completeCount} / ${this.totalCount}`;
		this.$target.appendChild(this.$paragraph);
	};
	this.setState = function(props) {
		this.totalCount = props.totalCount;
		this.completeCount = props.completeCount;
		this.render();
	};
	this.render();
}
