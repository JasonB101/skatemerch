import React, { useState, useContext } from "react"
import { Routes, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header"
import ProSkaters from "./components/ProSkaters/ProSkaters"
import Admin from "./components/Admin/Admin"
import AddNew from "./components/Admin/AddNew/AddNew"
import { storeContext } from "./Store"

const App = () => {
  const storeData = useContext(storeContext)
  const { skaters, products, changeSkaters, changeProducts, setSkaters } = storeData

  

  const proSkaterProps = {
    skaters,
    changeSkaters,
    products,
    changeProducts,
    setSkaters
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/proskaters"
          element={<ProSkaters {...proSkaterProps} />}
        />
        <Route
          path="/admin"
          element={<Admin {...proSkaterProps} />}
        />
      </Routes>
      <main></main>
    </>
  )
}

export default App
