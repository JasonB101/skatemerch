import React, { useState } from "react";
import Styles from "./AddNewProduct.module.scss"
import ProductGallery from "../../../Product/ProductGallery/ProductGallery"

const AddNewProduct = (props) => {
    const images = ["https://images-na.ssl-images-amazon.com/images/I/71Brt-aBu1L._UY395_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71D4bs8Q0ML._UY395_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71KB-91sG5L._UY395_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71ZUIkfdO1L._UY395_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71MKQvo0TpL._UY395_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71oNyU12lgL._UY395_.jpg"
    ]
    const [currentImage, changeImage] = useState(images[0])

    return (
        <div className={Styles.wrapper} >
            <div className={Styles.loadLinkWrapper} >
                <input type="text" name="amazonLinkTextBox" placeholder="Link to Amazon product:" />
                <button>Load</button>
            </div>
            <div className={Styles.imageWrapper} >
                <img className={Styles.currentImage} src={currentImage} />
                <ProductGallery images={images} imageMethods={[]} />
            </div>
            <div className={Styles.skaterWrapper}>
                <h4>Skater:</h4>
                <select>
                    <option>No Skater</option>
                </select>
            </div>
            <div className={Styles.reviewWrapper}>
                <h4>Review</h4>
                <textarea rows="6" />
            </div>
            <button>Sumbit</button>
            <button>Start Over</button>
        </div>
    );
}

export default AddNewProduct;