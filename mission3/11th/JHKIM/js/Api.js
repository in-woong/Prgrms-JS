export const searchUmzzal = async(text) => {
    /*global fetch*/
    if (text) {
        const response = await fetch(`https://jjalbot.com/api/jjals?text=${text}`);

        if (!response.ok) {
            throw new Error('네트워크 에러');
        }

        return await response.json();
    }
    else {
        return [];
    }

}