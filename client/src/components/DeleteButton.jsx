import axios from "axios";
import React from "react";

const button ={
    margin: '2% 4% 2%',
    fontSize: 'smaller',
    backgroundColor: 'red',
    width: '55%',
    height: '10%',
    padding: '1%',
    color:'black',
    textDecoration: 'none',
    border: '1px solid black',
    borderRadius: '8px'
}


const DeleteButton = props => {
    const { pirateId, successCallback } = props;

    const deletePirate = (req, res) => {
        axios.delete('http://localhost:8000/pirate/delete/'+ pirateId)
            .then( successCallback() )
            .catch(err => console.log("There was an error deleting pirate", err));
    };

    return (
        <button style={ button } onClick={ deletePirate }>
            Walk the plank
        </button>
    )
}

export default DeleteButton;