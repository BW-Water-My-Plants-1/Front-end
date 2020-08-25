import { combineReducers } from 'redux';
import { addPlantReducer } from './addPlantReducer';

export const rootReducer = combineReducers({
    addPlant: addPlantReducer
});