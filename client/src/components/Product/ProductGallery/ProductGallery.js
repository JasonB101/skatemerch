import React from "react";
import Styles from "./ProductGallery.module.scss"

const ProductGallery = ({images, setImage}) => {
    const imagesToRender = images.map((x, i) => <img key={x + String(i)} 
                                                onClick={() => setImage(x)}
                                                className={Styles.img} src={x}
                                                alt="products" />
                                                )

    return (
        <div className={Styles.wrapper}>
            {imagesToRender}
        </div>
    );
}

export default ProductGallery;