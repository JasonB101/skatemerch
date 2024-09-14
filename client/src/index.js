import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import Store from "./Store"
import App from "./App"
require("./global.css")

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <BrowserRouter>
    <React.StrictMode>
      <Store>
        <App />
      </Store>
    </React.StrictMode>
  </BrowserRouter>
)