import React, { useState } from "react";
import Styles from "./Product.module.scss"
import AmazonButton from "./AmazonButton/AmazonButton";
import Review from "./Review/Review";
import ProductGallery from "./ProductGallery/ProductGallery"

const Product = (props) => {
    const { products: { shoes } } = props.currentSkater;
    const { link, images } = shoes;
    const [currentImage, setImage] = useState(images[0]);

    return (
        <div className={`${Styles.wrapper} soft-shadow`}>
            <div className={Styles.displayImgWrapper}>
                <img className={Styles.displayImg} src={currentImage} />
            </div>

            <div className={Styles.info}>
                <ProductGallery images={images} imageMethods={[currentImage, setImage]} />
                <AmazonButton link={link} />
            </div>
            <div className={Styles.reviewWrapper}>
                <Review />
            </div>
        </div>
    );
}

export default Product;