
class ApiService extends HttpModule {
    constructor() {
        super();
        this.API_JJAL_LIST = "https://jjalbot.com/api/jjals"
    }

    getJjalList = async (query) => {
        const res = await this.onRequest(`${this.API_JJAL_LIST}?text=${query}`);
        return this.parseResponse(res);
    }
}

