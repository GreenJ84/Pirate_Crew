import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = props => {
    const {link, route} = props;

    const navBar = {
        width: '100%',
        height: '100px',
        background: 'brown',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 10%',
        margin: '0px 0px 3% 0px'
    }
    const title = {
      alignSelf: 'center',
      justifySelf: 'center',
      position: 'relative',
      left: '25%',
      boxShadow: '0 10px 6px -6px black',
      width: '50%',
      height: '50%',
      borderRadius: '10px'
    }
    const linkStyle = {
      color: 'blue',
      backgroundColor: 'grey',
      padding: '1%',
      borderRadius: '3px',
      boxShadow: '3px 3px black'
    }


  return (
    <div style= { navBar }>
      <h1 style={title}> My Pirate Crew </h1>
      <Link style={linkStyle} to={route}>{ link }</Link>
    </div>
  )
}
export default NavBar
