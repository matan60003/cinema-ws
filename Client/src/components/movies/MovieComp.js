import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import MembersWatchedComp from './MembersWatchedComp';
const MovieComp = (props) => {



    return (
        <div style={{ border: ' 1px solid black' }}>
            <h3> {props.movie.name} </h3> <br />
            geners: {props.movie.genres.map((gener) => { return (<div key={gener.id} > {gener} </div>) })} <br />
            <img src={props.movie.image} width="150" height="200" /> <br />

            <button> <Link to={`/main/movies/editMovie/${props.movie.id}`}> Edit  </Link> </button>
            <button onClick={e => props.deleteBtn(props.user.id)}> <Link to='/main/movies'> Delete  </Link> </button>
            <MembersWatchedComp id={props.movie._id} />

        </div>

    )


}


export default MovieComp;