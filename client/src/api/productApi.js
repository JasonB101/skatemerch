import axios from "axios"

export const postNewProduct = (product) => {
    return axios.post("http://localhost:8080/api/v1/products", product)
}

export const getProducts = () => {
    return axios.get("http://localhost:8080/api/v1/products")
}