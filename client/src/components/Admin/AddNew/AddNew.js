import React, {useState} from "react";
import Styles from "./AddNew.module.scss"
import AddNewProduct from "./AddNewProduct/AddNewProduct"
import AddNewSkater from "./AddNewSkater/AddNewSkater"
import Selection from "./Selection/Selection"

const AddNew = ({addNew, skaters, changeSkaters, changeProducts, setSkaters}) => {
    const [showAddNewO, toggleAddNew] = addNew;
    const {selection, addSkater, addProduct} = showAddNewO;
    const [lastSkaterAdded, changeLastSkater] = useState("")

    const toggle = (e) => {
        if (e.target.id === "exitAddNew"){
            clearAddNewO();
        }
    }

    const clearAddNewO = () => {
        let newObj = {...showAddNewO};
            for (let x in newObj){
                newObj[x] = false;
            }
            toggleAddNew(newObj);
    }

    const addNewSkaterProps = {
        showAddNewArray: [showAddNewO, toggleAddNew],
        lastSkater: [lastSkaterAdded, changeLastSkater],
        changeSkaters,
        skaters,
        setSkaters
    }

    const addNewProductProps = {
        lastSkater: lastSkaterAdded,
        clearAddNewO: clearAddNewO,
        skaters: skaters,
        changeProducts
    }

    const selectionProps = {
        addNew: addNew
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