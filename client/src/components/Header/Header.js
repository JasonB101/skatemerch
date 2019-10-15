import React from "react";
import Styles from "./Header.module.scss"

const Header = () => {

    return (
        <header className={`${Styles.wrapper} shadow`}>
            <h1>SkateMerch</h1>
        </header>
    );
}

export default Header;