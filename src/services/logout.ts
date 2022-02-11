import {Routes} from '~/constants';

const logout = () => {
    const url = Routes.Login;
    localStorage.clear();    
    window.location.href = `${url}`;
};

export default logout;