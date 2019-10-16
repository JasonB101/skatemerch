import React from "react";
import Styles from "./AddNewSkater.module.scss"
import newSkaterImg from "../../../../images/skaters/newSkater.png"

const AddNewSkater = (props) => {

    return (
        <div className={Styles.wrapper}>
            <input type="text" name="skaterName" placeholder="Skater's Name:" />
            <div>
                <img src={newSkaterImg} />
                <input type="text" name="skaterImageLink" placeholder="Link to Skater's Image:" />
            </div>
            <button>Submit</button>
        </div>
    );
}

export default AddNewSkater;