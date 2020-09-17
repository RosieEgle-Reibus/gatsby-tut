import React from "react"
import { Link } from "gatsby"

import style from "./mainnav.module.css"

const MainNav = ({navigation}) => {


  return (
    <nav className={style.navigation}>
      <ul>
        {navigation.map(props => (
          <li key={props.name}>
            <Link to={props.link}>{props.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
