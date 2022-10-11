import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PirateList from '../components/PirateList';

const Main = () => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    axios.get('http://localhost:8000/pirates/get')
        .then(res => {setPirates(res.data); setLoaded(true);})
        .catch( err => console.log('Error getting all authors', err));
    }, [loaded]);

    const removeFromDom = authorId => {
        setPirates(pirates.filter( pirate => pirate._id !== authorId))
    }

    return (
    <>
        <PirateList removeFromDom={removeFromDom} pirates={ pirates } />
    </>
    )
}

export default Main