import Redux from 'redux';
import { SEND_TO_CALC } from '../actions/index';

export default function(state={}, action){

  switch(action.type){
    case SEND_TO_CALC:
      return action.payload;
   
    default:  
      return state;
   }
  
}