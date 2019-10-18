import React, {useState} from "react";
import Styles from "./AddNew.module.scss"
import AddNewProduct from "./AddNewProduct/AddNewProduct"
import AddNewSkater from "./AddNewSkater/AddNewSkater"
import Selection from "./Selection/Selection"

const AddNew = (props) => {
    const [showAddNew, toggleAddNew] = props.addNew;
    const {selection, addSkater, addProduct} = showAddNew;
    const [lastSkaterAdded, changeLastSkater] = useState("")

    const toggle = (e) => {
        if (e.target.id === "exitAddNew"){
            clearAddNew();
        }
    }

    const clearAddNew = () => {
        let newObj = {...showAddNew};
            for (let x in newObj){
                newObj[x] = false;
            }
            toggleAddNew(newObj);
    }

    const addNewSkaterProps = {
        showAddNew: [showAddNew, toggleAddNew],
        lastSkater: [lastSkaterAdded, changeLastSkater],
        setSkaters: props.setSkaters
    }

    const addNewProductProps = {
        lastSkater: lastSkaterAdded,
        clearAddNew: clearAddNew,
        skaters: props.skaters
    }

    const selectionProps = {
        addNew: props.addNew
    }

    return (
        <div id="exitAddNew" className={Styles.transparentWrapper} 
            onClick={toggle}>
            <div className={Styles.wrapper}>
                {selection && <Selection {...selectionProps}/>}
                {addSkater && <AddNewSkater {...addNewSkaterProps}/>}
                {addProduct && <AddNewProduct {...addNewProductProps}/>}
            </div>
        </div>
    );
}

export default AddNew;