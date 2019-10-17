import axios from "axios"

export const postNewSkater = (skater) => {
    axios.post("http://localhost:8080/skaters", skater)
    .then(result => console.log(result));
}