import React, { useState } from "react";
import Styles from "./AddNewSkater.module.scss"
import newSkaterImg from "../../../../images/skaters/newSkater.png"
import { postNewSkater } from "../../../../api/skaterApi"

const AddNewSkater = ({showAddNewArray, lastSkater, changeSkaters, skaters, setSkaters}) => {
    const [skaterInputs, changeSkaterInputs] = useState({
        skaterName: "",
        skaterAvatar: ""
    })

    const [showAddNewO, toggleAddNew] = showAddNewArray;
    const changeLastSkater = lastSkater[1];

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
                    ...showAddNewO,
                    addSkater: false,
                    selection: true
                })

                changeLastSkater(skater.skaterName)
                setSkaters()
                // setSkaters() need to change to changeSkaters and make sure 'skater' has the same structure as returned by the API
            }
        })
        
    }

    return (
        <div className={Styles.wrapper}>

            <input onChange={changeInputs} type="text" name="skaterName" 
                    placeholder="Skater's Name:" 
                    value={skaterInputs.skaterName} />

            <div>
                <img src={skaterInputs.skaterAvatar || newSkaterImg} alt="Skater" />

                <input onChange={changeInputs} type="text" name="skaterAvatar" 
                        placeholder="Link to Skater's Image:" 
                        value={skaterInputs.skaterAvatar} />
            </div>

            <button onClick={(e) => submitSkater(skaterInputs)}>Submit</button>
        </div>
    );
}

export default AddNewSkater;