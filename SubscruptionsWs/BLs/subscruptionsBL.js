const e = require('express');
const Subscruption = require('../models/subscruptionsModel');


const getAllSubscruptions = () => {
    console.log("We are on getAllSubscruptions BL")
    return new Promise((resolve, reject) => {
        Subscruption.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const getSubscruptionsById = (id) => {
    return new Promise((resolve, reject) => {
        Subscruption.find({ _id: id }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const updateSubscruptionById = (id, subscruptionToUpdate) => {
    return new Promise((resolve, reject) => {
        Subscruption.findByIdAndUpdate(id,
            {
                memberId: subscruptionToUpdate.memberId,
                movies: subscruptionToUpdate.movies

            }, (err) => {
                if (err)
                    reject(err)
                else
                    resolve('Subscription wes Succefully Updated')
            })

    })
}


const deleteSubscruption = (id) => {
    return new Promise((resolve, reject) => {
        Subscruption.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Subscription deleted succefully")
            }
        })
    })
}


const addSubscruption = (SubscruptionObj) => {
    return new Promise((resolve, reject) => {
        let newSubscruption = new Subscruption({
            memberId: SubscruptionObj.memberId,
            movies: SubscruptionObj.movies
        })
        newSubscruption.save((err) => {
            err ? reject(err) : resolve('Subscription Created')
        })
    })
}

const deleteMovieFromSub = (idSub, idMovie) => {
    return new Promise((resolve, reject) => {
        // השגה של הדוקיומנט שממנו נרצה למחוק סרט - באמצעות איידי
        Subscruption.findById(idSub, (err, sub) => {
            if (err) {
                reject(err)
            } else {
                // אחרי שהשגנו את 'סאב' נמצא את האינדקס של הסרט בתוך המערך סרטים של סאב
                let index = sub.movies.findIndex(movie => movie.movieId == idMovie)
                // נמחק ממערך הסרטים החל מהאינדקס אלמנט 1
                sub.movies.splice(index, 1)


                // עדכון של סאב למאגר המידע - באמצעות איידי
                Subscruption.findByIdAndUpdate(idSub, sub, err => {
                    err ? reject(err) : resolve("Movie Deleted!")
                })
            }
        })
    })
}

const addMovieToSub = (idSub, movieObj) => {
    return new Promise((resolve, reject) => {
        // השגה של הדוקיומנט שאליו נרצה להוסיף סרט
        Subscruption.findById(idSub, (err, sub) => {
            if (err) {
                reject(err)
            } else {
                // אחרי שהשגנו את 'סאב' נוסיף את מובי אובג'קט לתוך מערך ה 'מוביס' (ספרד-אופרטור)
                sub.movies = [...sub.movies, movieObj]

                // עדכון של סאב למאגר המידע
                Subscruption.findByIdAndUpdate(idSub, sub, err => {
                    err ? reject(err) : resolve("Movie Created")
                })


            }
        })
    })
}



module.exports = {
    getAllSubscruptions,
    getSubscruptionsById,
    updateSubscruptionById,
    deleteSubscruption,
    addSubscruption,
    deleteMovieFromSub,
    addMovieToSub


}