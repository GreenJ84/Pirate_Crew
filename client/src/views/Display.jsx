import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';

const getColor = () => {
    const colors = [
        'brown',
        'grey',
        'darkred',
        'lightblue',
        'lightgrey'
    ]
    let random = Math.floor(Math.random() * colors.length);
    return colors[random]
}
const divStyle ={
    backgroundColor: getColor(),
    padding: '5%',
    width: '60%',
    margin: '0px 20% 4%',
    borderRadius: '10px'
}
const button = {
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'black',
    padding: '2% 5%',
    borderRadius: '3px',
    boxShadow: '3px 3px black'
}
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
        <NavBar route='/' link='Crew Board'/>
        <div>
                <h1 style={{ borderBottom: '1px solid black', width: '50%', margin: '0px 25% 5%'}}> {pirate.pirate_name} </h1>
        </div>
        <img style={imgStyle} alt='' src={pirate.image_url}/>
        <h2>~ <em>{pirate.catch_phrase}</em></h2>
        <div style={ divStyle }>
            <h2 style={{ borderBottom: '1px solid black', width: '50%', margin: '0px 25% 5%'}}>About</h2>
            <p>Position: {pirate.position}</p>
            <p>Treasures: {pirate.num_of_chests}</p>
            <p>Peg Leg: {pirate.attributes.pegLeg ? 'Yes' : 'No'} </p>
            <p>Eye Patch: {pirate.attributes.eyePatch ? 'Yes' : 'No'}</p>
            <p>Hook Hand: {pirate.attributes.hookHand ? 'Yes' : 'No'} </p>
            <br/>
            <br/>
            <Link style={ button } to={'/update/'+pirate._id}> Edit </Link>
        </div>
        
        </>}</>
    )
}

export default Display;