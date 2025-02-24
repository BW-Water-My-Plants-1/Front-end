import {axiosWithAuth} from '../utils/axiosWithAuth'

export function fetchPlantsApi() {
    return axiosWithAuth().get('plants/myplants')
    .then(res => {
        // console.log(res)
        return res.data
    })
    .catch(err => {
        console.log(err)
    
    })
}

export function fetchUserInfo() {
    return axiosWithAuth().get('users/myinfo')
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}