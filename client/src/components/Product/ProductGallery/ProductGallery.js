import React from "react";
import Styles from "./ProductGallery.module.scss"

const ProductGallery = ({images, imageMethods}) => {
    const [currentImage, setImage] = imageMethods;
    const imagesToRender = images.map(x => <img key={x} 
                                                onClick={() => setImage(x)}
                                                className={Styles.img} src={x}
                                                alt="products" />)

    return (
        <div className={Styles.wrapper}>
            {imagesToRender && imagesToRender}
        </div>
    );
}

export default ProductGallery;