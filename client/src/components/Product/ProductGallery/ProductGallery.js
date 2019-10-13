import React from "react";
import Styles from "./ProductGallery.module.css"

const ProductGallery = ({images, imageMethods}) => {
    const [currentImage, setImage] = imageMethods;
    const imagesToRender = images.map(x => <img key={x} 
                                                onClick={() => setImage(x)}
                                                className={Styles.img} src={x} />)

    return (
        <div className={Styles.wrapper}>
            {imagesToRender}
        </div>
    );
}

export default ProductGallery;