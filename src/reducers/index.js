import { combineReducers } from 'redux';
import  apiReducer  from './api_reducer';

const rootReducer = combineReducers({
    apiResponse: apiReducer  
});

export default rootReducer;
