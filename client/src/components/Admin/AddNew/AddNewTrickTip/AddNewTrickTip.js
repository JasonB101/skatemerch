import React, { useState } from "react";
import Styles from "./AddNewTrickTip.module.scss"
import newTrickTipImg from "../../../../images/icons/tips.png"
import uploadedVideoImg from "../../../../images/icons/video.png"
import { postNewTrickTip } from "../../../../api/trickTipApi"

const AddNewTrickTip = ({addNew}) => {
    const [trickTipInputs, changeTrickTipInputs] = useState({
        trickTitle: "",
        videoLink: "",
        tip: ""
    })

    const [showAddNewO, toggleAddNew] = addNew; //the array just has the state and state changer in it

    const changeInputs = (e) => {
        changeTrickTipInputs({
            ...trickTipInputs,
            [e.target.name]: e.target.value
        })
    }

    const submitTrickTip = (trickTip) => {
        postNewTrickTip(trickTip)
        .then(result => {
            if (result.status === 200){

                toggleAddNew({
                    ...showAddNewO,
                    addTrickTip: false,
                    selection: true
                })
            }
        })
        
    }

    return (
        <div className={Styles.wrapper}>

            <input onChange={changeInputs} type="text" name="trickTitle" 
                    placeholder="Trick Title:" 
                    value={trickTipInputs.trickTitle} />

            <div>
                <img src={trickTipInputs.videoLink ? uploadedVideoImg : newTrickTipImg} alt="Skater" />

                <input onChange={changeInputs} type="text" name="videoLink" 
                        placeholder="Link to Trick Tip Video:" 
                        value={trickTipInputs.videoLink} />
            </div>
            <textarea onChange={changeInputs} rows="4" name="tip" 
                        placeholder="Tip:" 
                        value={trickTipInputs.tip} />

            <button onClick={(e) => submitTrickTip(trickTipInputs)}>Submit</button>
        </div>
    );
}

export default AddNewTrickTip;