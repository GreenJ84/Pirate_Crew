import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 
'react-router-dom'
import PirateForm from '../components/PirateForm'

const Update = () => {
    const { id } = useParams();
    const [pirate, setPirate] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/pirate/'+ id)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
            })
            .catch(err=>{
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })}, [id]);

        const updateAuthor = thisPirate => {
            axios.put('http://localhost:8000/pirate/update/'+id, thisPirate)
                .then(res => {console.log(res); nav('/') })
                .catch(err=>{
                    const errorResponse = err.response.data.error.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                }) 
            };

    return (
        <>
        {errors.map((err, index) => <p key={index}>{err}</p>)}

        {loaded &&<PirateForm pName={pirate.pirate_name} url={pirate.image_url} chests={pirate.num_of_chests} pos={pirate.position} phrase={pirate.catch_phrase} leg={pirate.attributes.pegLeg} eye={pirate.attributes.eyePatch} hand={pirate.attributes.hookHand} type='Edit' onSubmit={ updateAuthor } />}
    </>
    )
}

export default Update;