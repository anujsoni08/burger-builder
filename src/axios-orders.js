import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-62f86.firebaseio.com/'
});

export default instance;