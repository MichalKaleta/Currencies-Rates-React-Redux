import Redux from 'redux';
import { API_REQUEST } from '../actions/index';

export default function(state={}, action){

  switch(action.type){
    case API_REQUEST:
      return action.payload;
         
    default:  
      return state;
   }
  
}