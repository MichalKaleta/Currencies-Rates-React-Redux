import { combineReducers } from 'redux';

import  apiReducer  from './api_reducer';
import  activeRowReducer from './active_row_reducer'
const rootReducer = combineReducers({
    apiResponse: apiReducer  ,
    activeRowData: activeRowReducer
});

export default rootReducer;
