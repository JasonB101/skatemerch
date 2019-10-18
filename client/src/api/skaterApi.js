import axios from "axios"

export const postNewSkater = (skater) => {
    return axios.post("http://localhost:8080/api/v1/skaters", skater)
}

export const getSkaters = () => {
    return axios.get("http://localhost:8080/api/v1/skaters")
}