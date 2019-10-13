import React from "react";
import Styles from "./ProSkaterCard.module.css"

const ProSkaterCard = (props) => {
    const {name, img, id} = props
    return (
        <div onClick={(e) => alert(id)} 
        className={`${Styles.wrapper} soft-shadow`}>
            <img className={Styles.img} src={img}/>
            <h5 className={Styles.h5}>{name}</h5>
        </div>
    );
}

export default ProSkaterCard;