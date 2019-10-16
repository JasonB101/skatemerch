import React from "react";
import Styles from "./Selection.module.scss"
import skaterImg from "../../../../images/icons/skater.png"
import productImg from "../../../../images/icons/shoe.png"

const Selection = (props) => {

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.selector}>
                <img src={skaterImg} />
                <h4>Skater</h4>
            </div>
            <div className={Styles.selector}>
                <img src={productImg} />
                <h4>Product</h4>
            </div>
        </div>
    );
}

export default Selection;