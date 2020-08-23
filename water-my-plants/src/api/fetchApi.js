import {axiosWithAuth} from '../utils/axiosWithAuth'

export function fetchApi() {
    return axiosWithAuth().get('enter endpoint here')
    .then(res => {
        // console.log(res)
        return res.data
    })
    .catch(err => {
        console.log(err)
    
    })
}