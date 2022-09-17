import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import PirateForm from '../components/PirateForm'

const Create = () => {
    const [errors, setErrors] = useState([]);
    const nav = useNavigate();

    const createAuthor = thisPirate => {
        console.log(thisPirate);
        axios.post('http://localhost:8000/pirate/new', thisPirate)
                .then(res => {console.log(res.data); nav('/'); })
                .catch(err => {
                    console.log(err);
                    const errorResponse = err.response.data.error;
                    const errorArr = [];
                    console.log(errorArr);
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors([...errorArr]);
                }) 
        }

    return (
    <>
        {errors.map((err, index) => <p key={index}>{err}</p>)}

        <PirateForm pName='' url='' chests={0} pos='' phrase='' leg={true} eye={true} hand={true} type='Add' onSubmit={ createAuthor } />
    </>
    )
}

export default Create