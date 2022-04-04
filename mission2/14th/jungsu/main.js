
import App from './App.js';

const $target = document.querySelector('.App');

new App({
    $target,
    initialState: [
        {
            text: 'js 공부하기',
            isCompleted: false,
        },
        {
            text: 'js 공부하기',
            isCompleted: false,
        },
    ]
})