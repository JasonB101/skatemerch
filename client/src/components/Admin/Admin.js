import React, {useState} from "react"
import AddNew from "./AddNew/AddNew"
const Admin = ({skaters, products, changeSkaters, changeProducts, setSkaters}) => {
  const [showAddNewO, toggleAddNew] = useState({
    selection: false,
    addSkater: false,
    addProduct: false,
    //addAffiliate
  })

  const clickedAddNew = () => {
    toggleAddNew({
      ...showAddNewO,
      selection: true,
    })
  }

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
    setSkaters
  }
  return (
    <>
      <h1 onClick={(e) => clickedAddNew()}>Add New</h1>
      {showAddNewComponent() && <AddNew {...addNewProps} />}
    </>
  )
}

export default Admin
