async function fetchImages(e, renderAction){
    try{
        let response = await fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`);
        let jsonResponse = await response.json();
        
        renderAction.setState(jsonResponse);
    } 
    catch(error){
        console.error('The error is occured, ',error);
    }
}