import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AllMoviesComp from './AllMoviesComp';
import AddMovieComp from './AddMovieComp';
import { MoviesContextProvider } from '../../Context/MoviesContext';
import EditMovieComp from './EditMovieComp';

const MoviesPlaceHolder = () => {
    const history = useHistory()


    const redirectToAllMoviesComp = () => {
        history.push("/main/movies")
    }

    const redirectToAddMovieComp = async () => {
        history.push("/main/movies/addMovie")
    }

    return (
        <div>
            <h1>MoviesPlaceHolder</h1>
            <input type="button" value="All Movies" onClick={redirectToAllMoviesComp} />
            <input type="button" value="Add Movie" onClick={redirectToAddMovieComp} />
            <Switch>
                <MoviesContextProvider>

                    <Route exact path="/main/movies" component={AllMoviesComp} /> {/*  */}
                    <Route path="/main/movies/addMovie" component={AddMovieComp} />
                    <Route path="/main/movies/editMovie" component={EditMovieComp} />
                </MoviesContextProvider>
            </Switch>

        </div>

    )


}


export default MoviesPlaceHolder;