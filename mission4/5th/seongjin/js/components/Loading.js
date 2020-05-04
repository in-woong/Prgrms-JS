import { $ } from "../util/index.js";
import { SELECTOR } from "../constants/index.js";

export default function Loading(isLoading) {
  this.$target = $(SELECTOR.LOADING);
  this.isLoading = isLoading;

  this.setState = nextData => {
    this.isLoading = nextData;
    this.render();
  };

  this.render = () => {
    if (this.isLoading) {
      return (this.$target.innerHTML =
        '<div class="loading">isLoading...</div>');
    } else {
      this.$target.innerHTML = "";
    }
  };
}
