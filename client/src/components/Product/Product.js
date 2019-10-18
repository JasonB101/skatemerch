import React, { useState } from "react";
import Styles from "./Product.module.scss"
import AmazonButton from "./AmazonButton/AmazonButton";
import Review from "./Review/Review";
import ProductGallery from "./ProductGallery/ProductGallery"

const Product = (props) => {
    const { link, review } = props;
    const images = props.images.map(x => x.urlToImage)

    const [currentImage, setImage] = useState(images[0]);

    const productGalleryProps = {
        images,
        setImage
    }


    return (
        <div className={`${Styles.wrapper} soft-shadow`}>
            <div className={Styles.displayImgWrapper}>
                <img className={Styles.displayImg} src={currentImage} alt="Product" />
            </div>

            <div className={Styles.info}>
                <ProductGallery {...productGalleryProps} />
                <AmazonButton link={link} />
            </div>
            <div className={Styles.reviewWrapper}>
                <Review review={review} />
            </div>
        </div>
    );
}

export default Product;