const axios = require('axios');
const subWsMoviesBL = require('../../SubscruptionsWs/BLs/moviesBL');
const Movie = require('../../SubscruptionsWs/models/moviesModel');



const getAllMovies = async () => {
    try {
        let resp = await axios.get("http://localhost:8000/movies");
        let data = resp.data;
        return data
    }
    catch (err) {
        console.log(err);
    }
}


const getMoviesById = async (id) => {
    try {
        let resp = await axios.get(`http://localhost:8000/movies/${id}`)
        const data = resp.data
        return data
    } catch (err) {
        return err
    }
}


const updateMovie = async (id, movieObj) => {
    try {
        let resp = await axios.put(`http://localhost:8000/movies/${id}`, movieObj)
        const data = resp.data
        return ' movie was updated successfully'
    } catch (err) {
        return err
    }
}


const deleteMovie = async (id) => {
    try {
        let resp = await axios.delete(`http://localhost:8000/movies/${id}`)
        const data = resp.data
        return "movie was deleted successfully"
    } catch (err) {
        return err
    }
}


const addMovie = async (newMovie) => {
    try {
        let resp = await axios.post(`http://localhost:8000/movies`, newMovie)
        const data = resp.data
        return "movie was created successfully"
    } catch (err) {
        return err
    }
}



module.exports = {
    getAllMovies,
    getMoviesById,
    updateMovie,
    deleteMovie,
    addMovie
}