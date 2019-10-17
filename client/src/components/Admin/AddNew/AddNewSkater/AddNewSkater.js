import React, { useState } from "react";
import Styles from "./AddNewSkater.module.scss"
import newSkaterImg from "../../../../images/skaters/newSkater.png"
import { postNewSkater } from "../../../../api/skaterApi"

const AddNewSkater = (props) => {
    const [skaterInputs, changeSkaterInputs] = useState({
        skaterName: "",
        skaterAvatar: ""
    })

    const [clearAddNew, toggleAddNew] = props.showAddNew;
    const [lastSkaterAdded, changeLastSkater] = props.lastSkater;

    const changeInputs = (e) => {
        changeSkaterInputs({
            ...skaterInputs,
            [e.target.name]: e.target.value
        })
    }

    const submitSkater = (skater) => {
        postNewSkater(skater);
        changeLastSkater(skater.skaterName);
    }

    return (
        <div className={Styles.wrapper}>

            <input onChange={changeInputs} type="text" name="skaterName" 
                    placeholder="Skater's Name:" 
                    value={skaterInputs.skaterName} />

            <div>
                <img src={newSkaterImg} />

                <input onChange={changeInputs} type="text" name="avatarLink" 
                        placeholder="Link to Skater's Image:" 
                        value={skaterInputs.skaterAvatar} />
            </div>

            <button onClick={(e) => submitSkater(skaterInputs)}>Submit</button>
        </div>
    );
}

export default AddNewSkater;