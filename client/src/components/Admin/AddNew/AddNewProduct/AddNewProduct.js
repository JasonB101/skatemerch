import React, { useState } from "react";
import Styles from "./AddNewProduct.module.scss"
import ProductGallery from "../../../Product/ProductGallery/ProductGallery"
import { postNewProduct } from "../../../../api/productApi"
import {getAmazonProduct} from "../../../../api/amazonApi"

const AddNewProduct = (props) => {
    const { lastSkater, clearAddNew } = props;
    const skaters = props.skaters;
    const skatersNames = skaters.map(x => <option key={x.name}>{x.name}</option> );

    const tempImages = []
    
    const [currentImage, setImage] = useState(tempImages[0]);
    const [productInputs, changeProductInputs] = useState({
        skaterId: lastSkater ? getSkaterId(lastSkater) : getSkaterId(skaters[0].name),
        link: "",
        review: "",
        urlsToImages: []
    })

    const loadAmazonProduct = (link) => {
        changeProductInputs({
            ...productInputs,
            urlsToImages: getAmazonProduct(link) || []
        })
    } 

    const submitProduct = () => {
        postNewProduct(productInputs)
            .then(result => {
                if (result.status === 200) {
                    clearAddNew();
                }
            })
    }

    function getSkaterId(skatersName) {
        if (skatersName)
            return skaters.find(x => x.name === skatersName).id;
        else
            return ""
    }

    const changeSkaterId = (e) => {
        changeProductInputs({
            ...productInputs,
            skaterId: getSkaterId(e.target.value)
        })
    }

    const changeInputs = (e) => {
        changeProductInputs({
            ...productInputs,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={Styles.wrapper} >
            <div className={Styles.loadLinkWrapper} >
                <input onChange={changeInputs}
                    type="text" name="link" placeholder="Link to Amazon product:"
                    value={productInputs.link} />
                <button onClick={() => loadAmazonProduct(productInputs.link)} >Load</button>
            </div>
            <div className={Styles.imageWrapper} >
                {productInputs.urlsToImages[0] && <img className={Styles.currentImage} src={currentImage} alt="Product"/>}
                <ProductGallery images={productInputs.urlsToImages} setImage={setImage} />
            </div>
            <div className={Styles.skaterWrapper}>
                <h4>Skater:</h4>
                <select onChange={changeSkaterId}
                defaultValue={lastSkater}>
                    {[...skatersNames, "No Skater"]}
                </select>
            </div>
            <div className={Styles.reviewWrapper}>
                <h4>Review</h4>
                <textarea onChange={changeInputs} rows="6" name="review"
                    value={productInputs.review} />
            </div>
            <button onClick={(e) => submitProduct()} className={Styles.submit}>Submit</button>
        </div>
    );
}

export default AddNewProduct;