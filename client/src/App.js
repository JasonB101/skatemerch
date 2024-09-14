import React, { useState, useContext } from "react"
import { Routes, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header"
import ProSkaters from "./components/ProSkaters/ProSkaters"
import AddNew from "./components/Admin/AddNew/AddNew"
import { storeContext } from "./Store"

const App = () => {
  const storeData = useContext(storeContext)
  const { skaters, products, changeSkaters, changeProducts } = storeData

  const [showAddNewO, toggleAddNew] = useState({
    selection: false,
    addSkater: false,
    addProduct: false,
    //addAffiliate
  })

  const showAddNewComponent = () => {
    let show = false
    for (let x in showAddNewO) {
      if (showAddNewO[x] === true) {
        show = true
      }
    }
    return show
  }

  const addNewProps = {
    addNew: [showAddNewO, toggleAddNew],
    changeSkaters, //used to setSkaters which calls the backend for all of the skaters after saving one, now I will just add it to state
    skaters,
    changeProducts,
  }

  const proSkaterProps = {
    skaters,
    products,
  }

  return (
    <>
      <Header addNew={[showAddNewO, toggleAddNew]} />
      <Routes>
        <Route
          path="/proskaters"
          element={<ProSkaters {...proSkaterProps} />}
        />
      </Routes>
      <main></main>
      {showAddNewComponent() && <AddNew {...addNewProps} />}
    </>
  )
}

export default App
