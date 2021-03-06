import React from "react";
import ProSkaterCard from "./ProSkaterCard/ProSkaterCard"
import Styles from "./ProSkaterMenu.module.scss"

const ProSkaterMenu = ({ skaters, changeCurrentSkater }) => {
    const skaterCards = skaters.map(x => <ProSkaterCard key={x.id} {...x} 
                                                        changeCurrentSkater={changeCurrentSkater} />)
    return (
        <div className={Styles.wrapper}>
            <div>
                {skaterCards}
            </div>
        </div>
    );
}

export default ProSkaterMenu;