import React from "react"
import { NavLink } from "react-router-dom"

import Styles from "./Header.module.scss"

const Header = ({ addNew }) => {
  const [showAddNew, toggleAddNew] = addNew

  const changeAddNew = () => {
    toggleAddNew({
      ...showAddNew,
      selection: true,
    })
  }

  return (
    <header className={`${Styles.wrapper} shadow`}>
      <h1>SkateMerch</h1>
      <NavLink
        to="/proskaters"
      >
        Pro Skaters
      </NavLink>
      <div className="spacer"></div>
      <h1 onClick={(e) => changeAddNew()}>Add New</h1>
    </header>
  )
}

export default Header
