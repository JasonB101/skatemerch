import React from "react";
import Header from "./components/Header/Header"
import ProSkaterMenu from "./components/ProSkaterMenu/ProSkaterMenu";
import Product from "./components/Product/Product"
import AddNew from "./components/Admin/AddNew/AddNew";

const App = (props) => {

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
        { name: "Kelvin Hoeflerffffffffff", img: tempLink, id: "kelvinhoefler" },
        { name: "Chaz Ortiz", img: tempLink, id: "chazortiz" },
        { name: "Louie Lopez", img: tempLink, id: "louielopez" },
        { name: "Yuto Horigome", img: "http://streetleague.wpengine.netdna-cdn.com/wp-content/uploads/2018/07/2018_ProPage_headshots_YutoHorigome.jpg", id: "yutohorigome" },
        { name: "Gustavo Rubiero", img: tempLink, id: "gustavoruberio" },
        { name: "Gustavo Rubiero", img: tempLink, id: "gustavoruberio" },
        { name: "Gustavo Rubiero", img: tempLink, id: "gustavoruberio" },
        { name: "Gustavo Rubiero", img: tempLink, id: "gustavoruberio" },
        { name: "Gustavo Rubiero", img: tempLink, id: "gustavoruberio" },
    ];
    return (
        <>
            <Header />
            <ProSkaterMenu skaters={skaters} />
            <main>
                <Product currentSkater={skaters[0]}/>
            </main>
            <AddNew />
        </>
    );
}

export default App;