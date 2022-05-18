import { isUserDataValid } from './checkDataIsValid.js';


export const setUserInStorage = ({ user }) => {
    
    let newUser = user;

    try {
        isUserDataValid({ user });
    } catch (e) {
        console.error(e.message);
        newUser = 'roto';
    } finally {
        localStorage.setItem('user', JSON.stringify(newUser));
    }
}

const getUserFromStorage = () => {
    try {
        const user = localStorage.getItem('user');

        if (!Boolean(user)) {
            setUserInStorage({ user: 'roto' });
            return 'roto';
        }

        return JSON.parse(user);

    } catch (e) {
        console.error(e.message);
        setUserInStorage({ user: 'roto' });
        return 'roto';
    }
}


export const initStorage = () => { 

    const user = getUserFromStorage();

    return user;
}
