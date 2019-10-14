import { combineReducers } from 'redux'; 
import productReducer from './productReducer';
import serviceReducer from './serviceReducer'

const rootReducer = combineReducers({
    productReducer,
    serviceReducer
})

export default rootReducer; 


