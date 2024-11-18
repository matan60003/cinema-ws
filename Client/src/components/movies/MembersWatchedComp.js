import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useHistory, Link } from 'react-router-dom';



const MembersWatchedComp = (props) => {
    const [subs, setsubs] = useState([])
    const [members, setMembers] = useState([])


    useEffect(async () => {
        let resp = await axios.get(`http://localhost:8001/members`)
        let memberList = resp.data
        setMembers(memberList)
    }, [])



    useEffect(async () => {
        let resp = await axios.get(`http://localhost:8001/subscriptions`)
        let allSubscriptions = resp.data
        setsubs(allSubscriptions)
    }, [])


    const liToRender = subs.map((sub) => {
        return (
            sub.movies.map((movie) => {
                if (movie.movieId === props.id) {
                    return (
                        <li key={movie._id}> <b> Name: </b> {members.map((member) => {

                            if (sub.memberId === member._id) {
                                return (
                                    <span key={member._id}> <Link to={''}> {member.name} </Link></span>
                                )
                            }
                        })} <br /> <b> Date:</b> {movie.date} </li>


                    )
                }
            })
        )
    })



    return (
        <div style={{ border: ' 1px solid black' }}>
            Subscriptions watched <br />
            {liToRender}
        </div>

    )


}


export default MembersWatchedComp;