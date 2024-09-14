import React from "react";
import Styles from "./Selection.module.scss"
import skaterImg from "../../../../images/icons/skater.png"
import productImg from "../../../../images/icons/hat.png"

const Selection = ({addNew}) => {
    const [showAddNewO, toggleAddNew] = addNew;

    const showSelection = (selected) => {
        toggleAddNew({
            ...showAddNewO,
            selection: false,
            [selected]: true
        })
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.selector}
            onClick={() => showSelection("addSkater")}>
                <img src={skaterImg} alt="Skater"/>
                <h4>Skater</h4>
            </div>
            <div className={Styles.selector}
            onClick={() => showSelection("addProduct")}>
                <img src={productImg} alt="Product" />
                <h4>Product</h4>
            </div>
        </div>
    );
}

export default Selection;