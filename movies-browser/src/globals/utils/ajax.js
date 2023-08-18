import axios from 'axios';

const getAxiosInstance = () => {
    return axios.create({
        baseURL: 'https://api.themoviedb.org/3',
    });
};

export { getAxiosInstance };