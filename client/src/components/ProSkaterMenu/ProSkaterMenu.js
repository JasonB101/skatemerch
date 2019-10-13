import React from "react";
import ProSkaterCard from "./ProSkaterCard/ProSkaterCard"
import Styles from "./ProSkaterMenu.module.css"

const ProSkaterMenu = ({skaters}) => {
    const skaterCards = skaters.map(x => <ProSkaterCard key={x.id} {...x}/>)
    return (
        <div className={Styles.wrapper}>
            {skaterCards}
        </div>
    );
}

export default ProSkaterMenu;