import React from "react";
import Styles from "./AmazonButton.module.css"
import amazonImage from "../../../images/amazon/amazon3-button.png"

const AmazonButton = (props) => {
    const productLink = "https://www.amazon.com/Nike-Nyjah-Free-Skateboarding-Shoes/dp/B07NNNBMHZ/ref=sr_1_1?crid=2R29FSQKXIBK5&dchild=1&keywords=nyjah+huston+shoes&qid=1570736996&s=apparel&sprefix=nyjah+houston+shoes%2Cfashion%2C201&sr=1-1"
    return (
            <a href={productLink} target="_blank">
                <img className={Styles.img} src={amazonImage} />
            </a>
    );
}

export default AmazonButton;