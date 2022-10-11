import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';

const formStyle = {
    backgroundColor: 'grey',
    width: '70%',
    margin: '3% 15%',
    borderRadius: '60px',
    padding: '4%',
    height: '600px'
}
const formItem = {
    margin: '4% 0px 2% 0px',
}
const checkbox ={
    margin: '2% 0px 0px 0px'
}
const button = {
    margin: '8% 4% 4%',
    backgroundColor: 'lightblue',
    width: '25%',
    height: '6%'
}

const PirateForm = (props) => {
    const { pName, url, chests, pos, phrase, leg, eye, hand, type, onSubmit } = props;
    
    const [pirate_name, setPirate_name] = useState(pName);
    
    const [image_url, setImage_url] = useState(url);
    
    const [num_of_chests, setNum_of_chests] = useState(chests);
    const [position, setPosition] = useState(pos);
    
    const [catch_phrase, setCatch_phrase] = useState(phrase);

    const [pegLeg, setPegLeg] = useState(leg);

    const [eyePatch, setEyePatch] = useState(eye);

    const [hookHand, setHookHand] = useState(hand);



    const nav = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        onSubmit({pirate_name, image_url, num_of_chests, position, catch_phrase, 'attributes.pegLeg': pegLeg, 'attributes.eyePatch': eyePatch, 'attributes.hookHand': hookHand });
    }

    const returnHome = (e) => {
        nav('/');
    }

    const changeLeg = leg => {
        if (leg === true){
            setPegLeg(false);
        } else {
            setPegLeg(true);
        }
    }
    
    const changeEye = eye => {
        if (eye === true){
            setEyePatch(false);
        } else {
            setEyePatch(true);
        }
    }

    const changeHand = hand => {
        if (hand === true){
            setHookHand(false);
        } else {
            setHookHand(true);
        }
    }

    return (
        <>
            <NavBar route='/' link='Crew Board' />
            <div>
                <h1>{type} Pirate</h1>
            </div>
            <form style={formStyle} onSubmit={ submitHandler }>
                <div>
                <p style={formItem}>
                    <label>Pirate Name:</label><br/>
                    <input type='text' onChange= { e => setPirate_name(e.target.value) } value={ pirate_name } required/>
                </p>
                <p style={formItem}>
                    <label>Image URL:</label><br/>
                    <input type='text' onChange= { e => setImage_url(e.target.value) } value={ image_url } required/>
                </p>
                <p style={formItem}>
                    <label># of chests:</label><br/>
                    <input type='number' onChange= { e => setNum_of_chests(e.target.value) } value={ num_of_chests } min='0' required/>
                </p>
                <p style={formItem}>
                    <label>Pirate Catch Phrase:</label><br/>
                    <input type='text' onChange= { e => setCatch_phrase(e.target.value) } value={ catch_phrase } required/>
                </p>
                </div>
                <div>
                <p style={formItem}>
                    <label>Position:</label><br/>
                    <select onChange= { e => setPosition(e.target.value) } value={ position } required>
                        <option value='' disabled>Please Choose</option>
                        <option value='Captain'>Captain</option>
                        <option value='First Mate'>First Mate</option>
                        <option value='Quarter Master'>Quarter Master</option>
                        <option value='Boatswain'>Boatswain</option>
                        <option value='Powder Monkey'>Powder Monkey</option>
                    </select>
                </p>
                    <div>
                        <input style={checkbox} type="checkbox"   onClick = { (e) => changeLeg(pegLeg) } checked={ pegLeg } />
                        <label> Peg Leg</label><br/>

                        <input style={checkbox} type="checkbox"  checked={ eyePatch } onChange={ (e) => changeEye( eyePatch ) } />
                        <label> Eye Patch</label><br/>

                        <input style={checkbox} type="checkbox"  checked={ hookHand } onChange={ e => changeHand( hookHand ) } />
                        <label> Hook Hand</label><br/>
                    </div>

                </div>

            <input  style={button} type='button' value='Cancel' onClick={ returnHome }/>
            <input style={button} type='Submit' value={type+' Pirate'}/>
            </form>
        </>
        )
}
export default PirateForm;