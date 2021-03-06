import React from "react";
import Styles from "./ProSkaterCard.module.scss"

const ProSkaterCard = (props) => {
    const { name, avatar, id, changeCurrentSkater } = props
    return (
        <div onClick={(e) => changeCurrentSkater({id, name, avatar})}
            className={`${Styles.wrapper} soft-shadow`}>
            <div>
                <img className={Styles.img} src={avatar} alt="Skater" />
            </div>
            <h5 className={Styles.h5}>{name}</h5>
        </div>
    );
}

export default ProSkaterCard;