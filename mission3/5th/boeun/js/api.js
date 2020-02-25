import { validateEmptyInput } from './validator.js';

async function fetchJjalbot(inputValue) {
    if(validateEmptyInput(inputValue)) {
        return
    }

    try {
        const response = await fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`);
        return response.json();
    } catch(error) {
        alert('API 에러입니다.');
        console.error(error);
    }
}

export { fetchJjalbot }
