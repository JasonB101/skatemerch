import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header"
import ProSkaterMenu from "./components/ProSkaterMenu/ProSkaterMenu";
import ProductList from "./components/Product/ProductList/ProductList"
import AddNew from "./components/Admin/AddNew/AddNew";
import {getSkaters} from "./api/skaterApi"
import {getProducts} from "./api/productApi"

const App = (props) => {

    const [showAddNew, toggleAddNew] = useState({
        selection: false,
        addSkater: false,
        addProduct: false
    });

    const [skaters, changeSkaters] = useState([]);
    const [currentSkater, changeCurrentSkater] = useState({id: "", name: "", avatar: ""});
    const [products, changeProducts] = useState([]);

    useEffect(()=>{
       setSkaters();
    },[])

    const setSkaters = () => {
        getSkaters()
        .then(results => {
            changeSkaters(results.data);
            changeCurrentSkater(results.data[0]);
        })
        getProducts()
        .then(results => changeProducts(results.data))
    }

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
        setSkaters: setSkaters,
        skaters: skaters
    }

    const productProps = {
        currentSkater: currentSkater,
        products: products
    }

    return (
        <>
            <Header addNew={[showAddNew, toggleAddNew]}/>
            <ProSkaterMenu skaters={skaters} changeCurrentSkater={changeCurrentSkater} />
            <main>
                <ProductList {...productProps} />
            </main>
            {showAddNewComponent() && <AddNew {...addNewProps}/>}
        </>
    );
}

export default App;