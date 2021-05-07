import axios from 'axios';

const instance = axios.create({
baseURL: 'https://react-myburger-e2d71.firebaseio.com/'
});

export default instance;