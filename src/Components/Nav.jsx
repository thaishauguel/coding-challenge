import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/temperature">Temperature</Link>
            <Link to="/customise-image">Customisation</Link>

        </div>
    )
}

export default Nav
