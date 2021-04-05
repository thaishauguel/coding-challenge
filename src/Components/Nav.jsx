import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    let navMain = {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "50px",
        borderBottom: "1px solid lightgrey",
        textDecoration: "none"
    }
    let link = {
        textDecoration: 'none',
        color: "darkGrey"
    }

    return (
        <div style={navMain}>
            <Link style={link} to="/">Home</Link>
            <Link style={link} to="/temperature">Temperature</Link>
            <Link style={link} to="/customise-image">Customisation</Link>

        </div>
    )
}

export default Nav
