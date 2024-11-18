import { MoviesContext } from "../../Context/MoviesContext";

import { useContext, useEffect } from "react";


const EditMovieComp = (props) => {
    const [movies, setMovies] = useContext(MoviesContext)



    return (
        <div>
            <h1> EditMovieComp </h1>
        </div>

    )


}


export default EditMovieComp;