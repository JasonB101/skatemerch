import React, {useState} from "react"

import ProSkaterMenu from "./ProSkaterMenu/ProSkaterMenu"
import ProductList from "../Product/ProductList/ProductList"
import Styles from "./ProSkaters.module.scss"

const ProSkaters = ({ skaters, products }) => {
  const [currentSkater, changeCurrentSkater] = useState({
    id: "",
    name: "",
    avatar: "",
  })
  const productProps = {
    currentSkater,
    products,
  }

  return (
    <div className={Styles["proSkaterWrapper"]}>
      <ProSkaterMenu
        skaters={skaters}
        changeCurrentSkater={changeCurrentSkater}
      />
      <ProductList {...productProps} />
    </div>
  )
}

export default ProSkaters
