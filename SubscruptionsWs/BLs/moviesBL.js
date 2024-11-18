const Movie = require('../models/moviesModel');
const tvMazeDal = require('../DAL/tvMaze');



const populateDbWithMovies = async () => {
    const resp = await tvMazeDal.getAllMovies();
    const movies = resp.data.slice(0, 10)
    movies.forEach(movie => {
        const newMovie = new Movie({
            name: movie.name,
            genres: movie.genres,
            image: movie.image.medium,
            premiered: movie.premiered
        })
        newMovie.save(err => { if (err) return err })
    });
}

const getAllMovies = () => {
    console.log("we are on getAllMovies BL")
    return new Promise((resolve, reject) => {
        Movie.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const getMoviesById = (id) => {
    return new Promise((resolve, reject) => {
        Movie.find({ _id: id }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const updateMovieById = (id, movieToUpdate) => {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndUpdate(id,
            {
                name: movieToUpdate.name,
                genres: movieToUpdate.genres,
                image: movieToUpdate.image.medium,
                premiered: movieToUpdate.premiered
            }, (err) => {
                if (err)
                    reject(err)
                else
                    resolve('Movie wes Succefully Updated')
            }
        )
    })
}


const deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Movie deleted succefully")
            }
        })
    })
}


const addMovie = (movieObj) => {
    return new Promise((resolve, reject) => {
        let newMovie = new Movie({
            name: movieObj.name,
            genres: movieObj.genres,
            image: movieObj.image.medium,
            premiered: movieObj.premiered
        })
        newMovie.save((err) => {
            err ? reject(err) : resolve("Movie Created")
        })
    })
}



module.exports = {
    populateDbWithMovies,
    getAllMovies,
    getMoviesById,
    updateMovieById,
    deleteMovie,
    addMovie

}