import React from "react";
import Styles from "./AmazonButton.module.scss"
import amazonImage from "../../../images/amazon/amazon3-button.png"

const AmazonButton = (props) => {
    const productLink = props.link;
    return (
        <a className={Styles.wrapper} href={productLink} target="_blank" rel="noopener noreferrer">
            <img src={amazonImage} alt="Amazon" />
        </a>
    );
}

export default AmazonButton;