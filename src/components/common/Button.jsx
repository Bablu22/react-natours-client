import React from 'react'
import { Link } from 'react-router-dom'

function Button({ children, classname, link, handleClick }) {
    return (
        <Link to={link}>
            <button type="submit" onClick={handleClick} className={`btn ${classname}`}>{children}</button>
        </Link>
    )
}

export default Button

