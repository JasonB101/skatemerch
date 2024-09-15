import React from "react"
import { NavLink } from "react-router-dom"

import Styles from "./Header.module.scss"

const Header = ({ addNew }) => {
 

  return (
    <header className={`${Styles.wrapper} shadow`}>
      <div className="spacer"></div>
      <NavLink
        to="/proskaters"
      >
        Pro Skaters
      </NavLink>
      <NavLink
        to="/tricktips"
      >
        Trick Tips
      </NavLink>
      <NavLink
        to="/events"
      >
        Event Calendar
      </NavLink>
      <NavLink
        to="/products"
      >Products
      </NavLink>
      <div className="spacer"></div>
    </header>
  )
}

export default Header
