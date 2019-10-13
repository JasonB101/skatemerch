import React, {useState} from "react";
import Styles from "./Product.module.css"
import AmazonButton from "./AmazonButton/AmazonButton";
import Review from "./Review/Review";
import ProductGallery from "./ProductGallery/ProductGallery"

const Product = (props) => {
    const {products: {shoes}} = props.currentSkater;
    const {link, images} = shoes;
    const [currentImage, setImage] = useState(images[0]);

    return (
        <div className={`${Styles.wrapper} soft-shadow`}>
            <img className={Styles.img} src={currentImage}/>
            <div className={Styles.info}>
                <ProductGallery images={images} imageMethods={[currentImage, setImage]}/>
                <AmazonButton link={link}/>
                <Review />
            </div>
        </div>
    );
}

export default Product;