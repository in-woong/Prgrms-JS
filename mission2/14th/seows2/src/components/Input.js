import { createElement } from '../util/helper.js';

const template = `
    <input value="" />
`;

export default function Input(props = {}) {
  const { type = 'text', placeholder = '' } = props;
  const $input = createElement(template);

  $input.setAttribute('type', type);
  $input.setAttribute('placeholder', placeholder);

  return $input;
}
