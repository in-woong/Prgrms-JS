export const $ = (ele, dom = document) => dom.querySelector(ele)


export const communicateWithAPI = async (url, tail) => {
    const receivedData = await fetch(`${url}${tail}`);
    if (receivedData.ok){
        return await receivedData.json();
    } else{
        throw new Error("Received Data is unsuitable!");
    }
  }