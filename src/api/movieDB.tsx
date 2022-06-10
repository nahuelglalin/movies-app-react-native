//Este archivo va a centralizar todas las peticiones a la API 

//1. Importo Axios
import axios from 'axios';

//2.asi manejo la informacion con la url y los headers de la peticion HTTP.
const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c12d08112cbab059ae23b10ec2f3a571',
        language: 'es-ES'
    }
});

//3. exporto la funcion movieDB
export default movieDB;
