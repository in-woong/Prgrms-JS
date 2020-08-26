import { isFunction } from './utils.js';

function Loader($target, { onShow, onHide }) {
  if (!this instanceof Loader) {
    throw new Error("Please use 'new' keyword");
  }
  if (!isFunction(onShow)) {
    throw new Error('onShow is not a function');
  }
  if (!isFunction(onHide)) {
    throw new Error('onHide is not a function');
  }

  this.$target = $target;
  this.isLoading = false;

  this.show = () => {
    this.$target.hidden = false;
    this.isLoading = true;
    onShow();
  };

  this.hide = () => {
    this.$target.hidden = true;
    this.isLoading = false;
    onHide();
  };
}

export default Loader;
