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

    const showAddNewComponent = () => {
        let show = false;
        for (let x in showAddNew){
            if (showAddNew[x] === true){
                show = true;
            }
        }
        return show;
    }

    const tempLink = "http://streetleague.wpengine.netdna-cdn.com/wp-content/uploads/2018/07/2018_ProPage_headshots_NyjahHuston.jpg"
    const skaters = [
        {
            name: "Nyjah Houston", img: tempLink, id: "nyjahhouston", products: {
                shoes: {
                    link: "#",
                    images: ["https://images-na.ssl-images-amazon.com/images/I/71Brt-aBu1L._UY395_.jpg",
                            "https://images-na.ssl-images-amazon.com/images/I/71D4bs8Q0ML._UY395_.jpg",
                            "https://images-na.ssl-images-amazon.com/images/I/71KB-91sG5L._UY395_.jpg",
                            "https://images-na.ssl-images-amazon.com/images/I/71ZUIkfdO1L._UY395_.jpg",
                            "https://images-na.ssl-images-amazon.com/images/I/71MKQvo0TpL._UY395_.jpg",
                            "https://images-na.ssl-images-amazon.com/images/I/71oNyU12lgL._UY395_.jpg"
                            ]
                }
            }
        },
        { name: "Yuto Horigome", img: "http://streetleague.wpengine.netdna-cdn.com/wp-content/uploads/2018/07/2018_ProPage_headshots_YutoHorigome.jpg", id: "yutohorigome" }
    ];
    return (
        <>
            <Header addNew={[showAddNew, toggleAddNew]}/>
            <ProSkaterMenu skaters={skaters} />
            <main>
                <Product currentSkater={skaters[0]}/>
            </main>
            {showAddNewComponent() && <AddNew addNew={[showAddNew, toggleAddNew]}/>}
        </>
    );
}

export default App;