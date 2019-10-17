import React from "react";
import Styles from "./Header.module.scss"

const Header = ({addNew}) => {
    const [showAddNew, toggleAddNew] = addNew;

    const changeAddNew = () => {
        toggleAddNew({
            ...showAddNew,
            selection: true
        })
    }

    return (
        <header className={`${Styles.wrapper} shadow`}>
            <h1>SkateMerch</h1>
            <div className="spacer"></div>
            <h1 onClick={(e) => changeAddNew()}>Add New</h1>
        </header>
    );
}

export default Header;