import React, { useState, useContext } from "react"
import { Routes, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header"
import ProSkaters from "./components/ProSkaters/ProSkaters"
import Admin from "./components/Admin/Admin"
import AddNew from "./components/Admin/AddNew/AddNew"
import { storeContext } from "./Store"
import TrickTips from "./components/TrickTips/TrickTips"

const App = () => {
  const storeData = useContext(storeContext)
  const { skaters, products, changeSkaters, changeProducts, setSkaters, trickTips } = storeData

  

  const proSkaterProps = {
    skaters,
    changeSkaters,
    products,
    changeProducts,
    setSkaters
  }

  const trickTipProps = {
    tips: trickTips
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
        <Route
          path="/tricktips"
          element={<TrickTips {...trickTipProps} />}
        />
      </Routes>
      <main></main>
    </>
  )
}

export default App
