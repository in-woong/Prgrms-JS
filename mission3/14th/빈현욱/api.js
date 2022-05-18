export const request = async(value) => {
    try {
        const response = await fetch(`https://jjalbot.com/api/jjals?text=${value}`);
        if(response.ok) return response.json();
    }catch(e){
        console.error(e);
    }
};
