import React, { useState, useEffect } from "react";
import Styles from "./Product.module.scss"
import AmazonButton from "./AmazonButton/AmazonButton";
import Review from "./Review/Review";
import ProductGallery from "./ProductGallery/ProductGallery"

const Product = (props) => {
    const { currentSkater, products } = props
    const product = products.find(x => x.skater === currentSkater.id);
    const images = product ? product.images.map(x => x.urlToImage) : [];
    const link = product ? product.link : "";
    const review = product ? product.review : "";
    const [currentImage, setImage] = useState("");

    useEffect(() => {

        setImage(images[0])

    }, [product])

    const productGalleryProps = {
        images: images,
        imageMethods: [currentImage, setImage]
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