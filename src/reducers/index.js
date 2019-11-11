import { combineReducers } from 'redux'; 
import listReducer from './listReducer';
import serviceReducer from './serviceReducer'

const rootReducer = combineReducers({
    listReducer,
    serviceReducer
})

export default rootReducer; 


