import React from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton'

const PirateList = (props) => {
    const { removeFromDom, pirates } = props;
    const imgStyle = {
        width: '100px',
        height: '100px'
    }
    

    return (
        <div>
            <div>
                <h1> Pirate Crew </h1>
                <Link to='/new'>Add Pirate</Link>
            </div>
            
            {pirates.map((pirate, idx) => {
                return <div key={idx}>
                    <img style={ imgStyle } alt='' src={pirate.image_url} />
                    <p>{pirate.pirate_name}</p>
                    <p>
                        <Link to={'/display/'+ pirate._id} >View Pirate</Link> <DeleteButton pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)}/></p>
                </div>
            }
            )}
        </div>
    )
}

export default PirateList;