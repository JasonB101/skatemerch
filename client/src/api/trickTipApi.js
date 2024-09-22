import axios from "axios"

export const postNewTrickTip = (trickTip) => {
    return axios.post("http://localhost:8080/api/v1/trickTips", trickTip)
}

export const getTrickTips = () => {
    return axios.get("http://localhost:8080/api/v1/trickTips")
}