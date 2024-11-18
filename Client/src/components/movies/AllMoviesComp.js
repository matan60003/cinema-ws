import { MoviesContext } from "../../Context/MoviesContext";

import { useContext, useEffect } from "react";
import axios, { Axios } from "axios";
import MovieComp from './MovieComp';

const AllMoviesComp = (props) => {

    const [movies, setMovies] = useContext(MoviesContext)

    useEffect(async () => {

        let resp = await axios.get(`http://localhost:8001/movies`)
        let allMovies = resp.data
        setMovies(allMovies)
        console.log(allMovies);
    }, [])


    const useDeleteUserBtnFromMovieComp = async (id) => {

    }





    let movieComps
    if (movies) {
        movieComps = movies.map((movie) => {
            return (
                <MovieComp key={movie.id} movie={movie} deleteBtn={useDeleteUserBtnFromMovieComp} />
            )
        })
    }




    return (
        <div>
            <h1>AllMoviesComp</h1>

            {movieComps}


        </div>

    )


}


export default AllMoviesComp;