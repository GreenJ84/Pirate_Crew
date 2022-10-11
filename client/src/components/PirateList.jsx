import React from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton'

const container = {
    display: 'flex',
    padding: '10%',
    flexWrap: 'wrap'
}
const divStyle = {
    padding: '3%',
    margin: '0 5% 15% 5%',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: '8%'
}
const button ={
    margin: '8% 4% 2%',
    fontSize: 'smaller',
    backgroundColor: 'lightgrey',
    width: '55%',
    height: '10%',
    padding: '1%',
    color:'black',
    textDecoration: 'none',
    border: '1px solid black',
    borderRadius: '8px'
}

const PirateList = (props) => {
    const { removeFromDom, pirates } = props;
    const imgStyle = {
        width: '40%',
        height: '40%'
    }
    

    return (
        <div style={container}>
            {pirates.map((pirate, idx) => {
                return <div key={idx} style={divStyle}>
                    <img style={ imgStyle } alt='' src={pirate.image_url} />
                    <p>{pirate.pirate_name}</p>
                    <Link style={ button } to={'/display/'+ pirate._id} >View Pirate</Link> 
                    <DeleteButton pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)}/>
                </div>
            }
            )}
        </div>
    )
}

export default PirateList;