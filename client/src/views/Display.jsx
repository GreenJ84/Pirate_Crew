import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Display = () => {
    const { id } = useParams();
    const [pirate, setPirate] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const imgStyle = {
        width: '100px',
        height: '100px'
    }
    

    useEffect(() => {
    
        axios.get('http://localhost:8000/pirate/'+ id)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
                return pirate;
            })
            .catch(err=>{
                console.log(err);
                const errorResponse = err.response;
                const errorArr = [];
                if (errorArr.length > 0){
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }}
                setErrors(errorArr);
            })}, []);

    // const updateAuthor = thisPirate => {
    //     axios.put('http://localhost:8000/pirate/update/'+id, thisPirate)
    //         .then(res => {console.log(res); nav('/') })
    //         .catch(err=>{
    //             const errorResponse = err.response.data.error.errors;
    //             const errorArr = [];
    //             for (const key of Object.keys(errorResponse)) {
    //                 errorArr.push(errorResponse[key].message)
    //             }
    //             setErrors(errorArr);
    //         }) 
    //     };

    // const changeLeg = leg => {
    //     if (leg === true){
    //         setPegLeg(false);
    //     } else {
    //         setPegLeg(true);
    //     }
    // }
    
    // const changeEye = eye => {
    //     if (eye === true){
    //         setEyePatch(false);
    //     } else {
    //         setEyePatch(true);
    //     }
    // }

    // const changeHand = hand => {
    //     if (hand === true){
    //         setHookHand(false);
    //     } else {
    //         setHookHand(true);
    //     }
    // }

    return (
        <>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        { loaded && <>
        <div>
                <h1> {pirate.pirate_name} </h1>
                <Link to='/'> Home </Link>
        </div>
        <img style={imgStyle} alt='' src={pirate.image_url}/>
        <h2>{pirate.catch_phrase}</h2>
        <div>
            <h2>About</h2>
            <p>Position: {pirate.position}</p>
            <p>Treasures: {pirate.num_of_chests}</p>
            <p>Peg Leg: {pirate.attributes.pegLeg ? 'Yes' : 'No'} <button ></button></p>
            <p>Eye Patch: {pirate.attributes.eyePatch ? 'Yes' : 'No'}</p>
            <p>Hook Hand: {pirate.attributes.hookHand ? 'Yes' : 'No'} </p>

        </div>
        <Link to={'/update/'+pirate._id}> Edit </Link>
        </>}</>
    )
}

export default Display;