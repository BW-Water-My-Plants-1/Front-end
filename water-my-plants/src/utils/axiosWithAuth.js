import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: "Enter base URL",
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}