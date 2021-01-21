export default function LoadingView($target, flag) {
    this.$target = $target;
    this.flag = flag;

    this.render = () => {
        if(this.flag === true) {
            $target.children[0].classList.remove('hidden');
            $target.children[1].classList.add('hidden');
            $target.children[2].classList.add('hidden');
            $target.children[3].classList.add('hidden');
            $target.children[4].classList.add('hidden');
        } else {
            $target.children[0].classList.add('hidden');
            $target.children[1].classList.remove('hidden');
            $target.children[2].classList.remove('hidden');
            $target.children[3].classList.remove('hidden');
            $target.children[4].classList.remove('hidden');
        }
    }

    this.setState = (nextState) => {
        this.flag = nextState;
        this.render();
    }

    this.render();
}
