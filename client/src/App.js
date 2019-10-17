import React, {useState} from "react";
import Header from "./components/Header/Header"
import ProSkaterMenu from "./components/ProSkaterMenu/ProSkaterMenu";
import Product from "./components/Product/Product"
import AddNew from "./components/Admin/AddNew/AddNew";

const App = (props) => {

    const [showAddNew, toggleAddNew] = useState({
        selection: false,
        addSkater: false,
        addProduct: false
    });

    const [lastSkaterAdded, changeLastSkater] = useState("")

    const showAddNewComponent = () => {
        let show = false;
        for (let x in showAddNew){
            if (showAddNew[x] === true){
                show = true;
            }
        }
        return show;
    }

    const addNewProps = {
        addNew: [showAddNew, toggleAddNew],
        lastSkater: [lastSkaterAdded, changeLastSkater]
    }

    return (
        <>
            <Header addNew={[showAddNew, toggleAddNew]}/>
            {/* <ProSkaterMenu skaters={skaters} /> */}
            <main>
                {/* <Product currentSkater={}/> */}
            </main>
            {showAddNewComponent() && <AddNew {...addNewProps}/>}
        </>
    );
}

export default App;