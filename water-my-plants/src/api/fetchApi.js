import {axiosWithAuth} from '../utils/axiosWithAuth'

export function fetchPlantsApi() {
    return axiosWithAuth().get('/plants/plants')
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(err => {
        console.log(err)
    
    })
}