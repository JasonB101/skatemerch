import React from "react";
import Styles from "./AddNew.module.scss"
import AddNewProduct from "./AddNewProduct/AddNewProduct"
import AddNewSkater from "./AddNewSkater/AddNewSkater"
import Selection from "./Selection/Selection"

const AddNew = (props) => {
    const [showAddNew, toggleAddNew] = props.addNew;
    const {selection, addSkater, addProduct} = showAddNew;

    const toggle = (e) => {
        if (e.target.id === "exitAddNew"){
            let newObj = {...showAddNew};

            for (let x in newObj){
                newObj[x] = false;
            }

            toggleAddNew(newObj);
        }
    }

    return (
        <div id="exitAddNew" className={Styles.transparentWrapper} 
            onClick={toggle}>
            <div className={Styles.wrapper}>
                {selection && <Selection addNewComponent={props.addNew}/>}
                {addSkater && <AddNewSkater addNewComponent={props.addNew}/>}
                {addProduct && <AddNewProduct addNewComponent={props.addNew}/>}
            </div>
        </div>
    );
}

export default AddNew;