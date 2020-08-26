import { checkTarget, checkNode } from '../utils/validator.js';
import { NODE } from '../utils/constant.js';

function LoadingView({ $target, isLoading }) {
  this.init = () => {
    checkTarget($target);
    checkNode(NODE.P);

    this.$target = $target;
    this.isLoading = isLoading;

    this.render();
  };

  this.render = () => {
    this.$target.className = this.isLoading
      ? 'loading-view active-loading'
      : 'loading-view visuallyhidden';
  };

  this.setState = (nextState) => {
    this.isLoading = nextState;

    this.render();
  };

  this.init();
}

export default LoadingView;
