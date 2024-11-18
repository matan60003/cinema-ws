import { createContext, useState } from "react";


//context
export const MoviesContext = createContext();



//provider
export const MoviesContextProvider = (props) => {
    const [movies, setMovies] = useState([])




    return (
        <MoviesContext.Provider value={[movies, setMovies]}>

            {props.children}

        </MoviesContext.Provider>
    )
}