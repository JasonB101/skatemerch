import React, { createContext, useState, useEffect } from "react"
import { getSkaters } from "./api/skaterApi"
import { getProducts } from "./api/productApi"
import { getTrickTips } from "./api/trickTipApi"

export const storeContext = createContext({})

const Store = ({ children }) => {
  const [skaters, changeSkaters] = useState([])
  const [products, changeProducts] = useState([])
  const [trickTips, changeTrickTips] = useState([])

  useEffect(() => {
    setSkaters()
    fetchProducts()
    fetchTrickTips()
        //Make sure we add error handling to all these api calls
  }, [])

  const setSkaters = () => {
    getSkaters().then((results) => {
      changeSkaters(results.data)
    })
  }

  const fetchProducts = () => {
    getProducts().then((results) => {
      changeProducts(results.data)
    })
  }
  const fetchTrickTips = () => {
    getTrickTips().then((results) => {
      changeTrickTips(results.data)
    })
  }

  return (
    <storeContext.Provider
      value={{
        skaters,
        products,
        trickTips,
        changeTrickTips,
        changeSkaters,
        changeProducts,
        setSkaters,
      }}
    >
      {children}
    </storeContext.Provider>
  )
}

export default Store
