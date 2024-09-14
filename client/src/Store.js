import React, { createContext, useState, useEffect } from "react"
import { getSkaters } from "./api/skaterApi"
import { getProducts } from "./api/productApi"

export const storeContext = createContext({})

const Store = ({ children }) => {
    const [skaters, changeSkaters] = useState([])
  
    const [products, changeProducts] = useState([])
  
    useEffect(() => {
      setSkaters()
    }, [])
  
    const setSkaters = () => {
      getSkaters().then((results) => {
        changeSkaters(results.data)
      })
      fetchProducts()
      //Make sure we add error handling to all these api calls
    }
  
    const fetchProducts = () => {
      getProducts().then((results) => changeProducts(results.data))
    }

  return <storeContext.Provider value={{
    skaters,
    products,
    changeSkaters,
    changeProducts
  }}>{children}</storeContext.Provider>
}

export default Store