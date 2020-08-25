import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({
        baseURL: "http://watermyplants-dg0511.herokuapp.com/",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}