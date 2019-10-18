import React from "react";
import Styles from "./Review.module.scss"

const Review = ({ review }) => {

    return (
        <div className={Styles.wrapper}>
            <h3>Review</h3>
            <p>{review}</p>
        </div>
    );
}

export default Review;