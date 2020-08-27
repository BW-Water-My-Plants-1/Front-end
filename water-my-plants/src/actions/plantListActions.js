import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCH_USER_PLANT_LIST = 'FETCH_USER_PLANT_LIST'
export const FETCH_USER_PLANT_LIST_ERROR = 'FETCH_USER_PLANT_LIST_ERROR'
export const FETCH_USER_PLANT_LIST_SUCCESS = 'FETCH_USER_PLANT_LIST_SUCCESS'

export const plantListActions = () => (dispatch) => {
    dispatch({ type: FETCH_USER_PLANT_LIST })

    axiosWithAuth()
        .get(`plants/myplants`) 
        .then(res => {
            // console.log(res)
            dispatch({ type: FETCH_USER_PLANT_LIST_SUCCESS, payload: res.data })
        
        })
        .catch(err => {
            dispatch({ type: FETCH_USER_PLANT_LIST_ERROR, payload: err.message})
        })

}

// export const FETCH_PLANT_BY_ID = 'FETCH_PLANT_BY_ID'
// export const FETCH_PLANT_BY_ID_SUCCESS = 'FETCH_PLANT_BY_ID_SUCCESS'
// export const FETCH_PLANT_BY_ID_FAILURE = 'FETCH_PLANT_BY_ID_FAILURE'

// export const plantsActions = (id) => (dispatch) => {
//     dispatch({ type: FETCH_PLANT_BY_ID })
//         axiosWithAuth()
//             .get(`plants/plant/${id}`)
//             .then(res=> {
//                 console.log(res)
//                 dispatch({type: FETCH_PLANT_BY_ID_SUCCESS, payload:res.data})
//             })
//             .catch(err => {
//                 console.log(err)
//                 dispatch({type: FETCH_PLANT_BY_ID_FAILURE, payload: err.message})
//             })
// }


