import { checkNewKeyword, checkTarget } from '../validation.js';

export default function Loading($loading) {
  const validation = () => {
    checkNewKeyword(new.target);
    checkTarget($loading);
  };

  validation();
  let isLoading = false;
  this.$loading = $loading;

  this.render = () => {
    if (isLoading) {
      this.$loading.innerText = 'Loading...';
    } else {
      this.$loading.innerText = '';
    }
  };

  this.setState = (loading) => {
    isLoading = loading;
    this.render();
  };
};
