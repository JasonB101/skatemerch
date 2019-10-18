import React, { useState } from "react";
import Styles from "./AddNewSkater.module.scss"
import newSkaterImg from "../../../../images/skaters/newSkater.png"
import { postNewSkater } from "../../../../api/skaterApi"

const AddNewSkater = (props) => {
    const [skaterInputs, changeSkaterInputs] = useState({
        skaterName: "",
        skaterAvatar: ""
    })

    const [showAddNew, toggleAddNew] = props.showAddNew;
    const [lastSkaterAdded, changeLastSkater] = props.lastSkater;
    const setSkaters = props.setSkaters;

    const changeInputs = (e) => {
        changeSkaterInputs({
            ...skaterInputs,
            [e.target.name]: e.target.value
        })
    }

    const submitSkater = (skater) => {
        postNewSkater(skater)
        .then(result => {
            if (result.status === 200){

                toggleAddNew({
                    ...showAddNew,
                    addSkater: false,
                    selection: true
                })

                changeLastSkater(skater.skaterName);
                setSkaters();
            }
        })
        
    }

    return (
        <div className={Styles.wrapper}>

            <input onChange={changeInputs} type="text" name="skaterName" 
                    placeholder="Skater's Name:" 
                    value={skaterInputs.skaterName} />

            <div>
                <img src={newSkaterImg} alt="Skater" />

                <input onChange={changeInputs} type="text" name="skaterAvatar" 
                        placeholder="Link to Skater's Image:" 
                        value={skaterInputs.skaterAvatar} />
            </div>

            <button onClick={(e) => submitSkater(skaterInputs)}>Submit</button>
        </div>
    );
}

export default AddNewSkater;