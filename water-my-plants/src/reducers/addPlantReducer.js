import { FETCH_USER_PLANT_LIST,
    FETCH_USER_PLANT_LIST_SUCCESS,
    FETCH_USER_PLANT_LIST_ERROR    
} from '../actions/plantListActions'

const initialState = {
    plants: [{
        plantid: '',
        nickname: '',
        species: '',
        frequency: '',
        lastwatered: ''
        }
    ],
    error: ''

}

export function addPlantReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_PLANT_LIST:
            return {
                ...state,
            }
        case FETCH_USER_PLANT_LIST_SUCCESS:
            return {
                ...state,
                plants: action.payload
            }
        case FETCH_USER_PLANT_LIST_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}

