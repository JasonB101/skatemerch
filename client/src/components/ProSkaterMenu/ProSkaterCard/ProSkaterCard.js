import React from "react";
import Styles from "./ProSkaterCard.module.scss"

const ProSkaterCard = (props) => {
    const { name, img, id } = props
    return (
        <div onClick={(e) => alert(id)}
            className={`${Styles.wrapper} soft-shadow`}>
            <div>
                <img className={Styles.img} src={img} />
            </div>
            <h5 className={Styles.h5}>{name}</h5>
        </div>
    );
}

export default ProSkaterCard;