import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: "http://watermyplants-dg0511.herokuapp.com/",
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}