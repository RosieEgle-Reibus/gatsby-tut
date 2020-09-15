import React from "react"
import {Link} from 'gatsby'

import style from "./nav.module.css"

const Nav = () => {
    return (
        <div className={style.wrapper}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
        </div>
    )
}

export default Nav