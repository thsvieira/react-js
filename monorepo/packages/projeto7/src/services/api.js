import axios from 'axios';

//BASE URL: https://api.themoviedb.org/3

//URL DA API: /movie/now_playing?api_key=a9e8acbcdd5457054bb67ef3b9b778ea&language=pt-BR

    const api = axios.create({
        baseURL: 'https://api.themoviedb.org/3'
    });

export default api;