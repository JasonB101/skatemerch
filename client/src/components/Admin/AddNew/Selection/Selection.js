import React from "react";
import Styles from "./Selection.module.scss"
import skaterImg from "../../../../images/icons/skater.png"
import productImg from "../../../../images/icons/shoe.png"
import tipsImg from "../../../../images/icons/tips.png"

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
            </div>
            <div className={Styles.selector}
            onClick={() => showSelection("addProduct")}>
                <img src={productImg} alt="Product" />
            </div>
            <div className={Styles.selector}
            onClick={() => showSelection("addTrickTip")}>
                <img src={tipsImg} alt="TrickTip" />
            </div>
        </div>
    );
}

export default Selection;