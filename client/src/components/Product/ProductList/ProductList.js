import React from "react";
import Styles from "./ProductList.module.scss"
import Product from "../Product"

const ProductList = (props) => {
    const { currentSkater, products } = props
    const filteredProducts = products.filter(x => x.skater === currentSkater.id);

    const productElements = filteredProducts.map(x => <Product key={x.id} {...x} />)

    return (
        <div className={Styles.wrapper}>
            {productElements}
        </div>
    );
}

export default ProductList;