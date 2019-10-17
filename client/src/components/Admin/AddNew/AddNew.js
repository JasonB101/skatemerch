import React from "react";
import Styles from "./AddNew.module.scss"
import AddNewProduct from "./AddNewProduct/AddNewProduct"
import AddNewSkater from "./AddNewSkater/AddNewSkater"
import Selection from "./Selection/Selection"

const AddNew = (props) => {

    return (
        <div className={Styles.transparentWrapper}>
            <div className={Styles.wrapper}>
                {/* <Selection />
                <AddNewSkater/> */}
                <AddNewProduct/>
            </div>
        </div>
    );
}

export default AddNew;