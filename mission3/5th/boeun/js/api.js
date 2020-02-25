import { validateEmptyInput } from './validator.js';

async function fetchJjalbot(inputValue) {
    if(validateEmptyInput(inputValue)) {
        return
    }

    const response = await fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`);
    return response.json();
}

export { fetchJjalbot }
