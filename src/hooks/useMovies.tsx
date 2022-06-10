import { useState, useEffect } from 'react';
import movieDB from "../api/movieDB";
import { Movie, MovieDBResponse } from "../interfaces/movieInterface";

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    //State para manejar la info segun si esta cargando o no la rta de la api
    const [ isLoading, setIsLoading ] = useState(true);

    //El state es de tipo array de Movie
    const [ moviesState, setMoviesState ] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });


    //Hago la peticion HTTP. La respuesta que me retorna es de tipo
    //MovieDBNowPlaying.
    const getMovies = async () => {
        
        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

        //Promise.all es una funcion que recibe un array de promesas
        //es para no hacerle un await a cada una, si no, que es para disparar
        //todas las peticiones de manera simultanea
        const resps = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise])

        //seteo el array de cada una de las repuestas, a cada
        //una de las variables. Ahora mi state es un objeto con 4 propiedades
        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results
        });
        setIsLoading(false); 
    }

    //Llama una sola vez al getMovies
    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading
    }

}
