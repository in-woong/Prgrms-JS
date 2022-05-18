import API from './api.js';

export const USER_API = {
    fetchUserList: async () => {
        try {
            return API.get({ path: 'users?delay=1000' });
        } catch (e) {
            console.error(e);
        }
    }
}
