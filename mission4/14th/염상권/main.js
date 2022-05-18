import App from './app.js';
import { $, createDomElem } from './utils/index.js';

class Main {
    constructor() {
        this.main = $({ selector: 'main' });
    }

    init() {
        const $fragment = document.createDocumentFragment();

        const $userContainer = createDomElem({
            tagName: 'div',
            selector: 'class',
            name: 'user--container', 
        })

        const $todoContainer = createDomElem({
            tagName: 'div',
            selector: 'class',
            name: 'todo--container',
        })

        const $todoTitle = createDomElem({
            tagName: 'h1',
            selector: 'class',
            name: 'todo--title',
        });

        const $form = createDomElem({
            tagName: 'form',
            selector: 'class',
            name: 'todo--form'
        });

        const $label = createDomElem({
            tagName: 'label',
            selector: 'id',
            name: 'todo--label'
        });
        $label.setAttribute('for', 'todo--input');

        const $input = createDomElem({
            tagName: 'input',
            selector: 'id',
            name: 'todo--input'
        });
        $input.setAttribute('type', 'text');
        $input.setAttribute('required', true);
        $input.setAttribute('placeholder', '할 일을 입력해주세요.');
        $input.setAttribute('autofocus', true);

        const $addButton = createDomElem({
            tagName: 'button',
            selector: 'class',
            name: 'todo--add-button'
        });
        $addButton.innerText = '입력';
        $addButton.setAttribute('type', 'submit');

        const $deleteButton = createDomElem({
            tagName: 'button',
            selector: 'class',
            name: 'todo--delete-button'
        });
        $deleteButton.innerText = '전부 삭제';
        $deleteButton.setAttribute('type', 'button');

        const $todoListContainer = createDomElem({
            tagName: 'div',
            selector: 'class',
            name: 'todo--list-container'
        });

        const $todoLeft = createDomElem({
            tagName: 'div',
            selector: 'class',
            name: 'todo--list__left',
        });

        const $todoDone = createDomElem({
            tagName: 'div',
            selector: 'class',
            name: 'todo--list__done',
        });
        
        const $todoCountContainer = createDomElem({
            tagName: 'div',
            selector: 'class',
            name: 'todo--count-container'
        });

        [$label, $input, $addButton, $deleteButton].forEach($elem => {
            $form.appendChild($elem);
        });

        [$todoLeft, $todoDone].forEach($elem => {
            $todoListContainer.appendChild($elem);
        });

        [$todoTitle, $form, $todoListContainer, $todoCountContainer].forEach($elem => {
            $todoContainer.appendChild($elem);
        });

        [$userContainer, $todoContainer].forEach($elem => {
            $fragment.appendChild($elem);
        });

        this.main.appendChild($fragment);
    }
}

const main = new Main();
main.init();

const app = await new App();
app.render();
