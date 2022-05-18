// 의존성을 없애고 타겟 위에 div 넣기?
// todoList 부분을 의존성 없이 어떻게 찾지? 상수? state?

export default function Loading({ $target, $changeTarget, initialState }) {
    this.$element = document.createElement('div');
    this.$element.className = 'loading';
    this.$changeTarget = $changeTarget;

    $target.appendChild(this.$element);


    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        if (this.state) {
            this.$element.style.display = "block";
            this.$changeTarget.style.display = "none";
        } else {
            this.$element.style.display = "none";
            this.$changeTarget.style.display = "block";
        }
    }

    this.render();
}