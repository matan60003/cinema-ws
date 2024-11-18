const axios = require('axios');


exports.getAllMovies = () => {
    return axios.get('https://api.tvmaze.com/shows')
}