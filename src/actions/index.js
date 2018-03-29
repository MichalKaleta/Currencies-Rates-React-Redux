import axios from 'axios'


export const API_REQUEST ='API_REQUEST';;
export const SEND_TO_CALC ='SEND_TO_CALC';

export function apiRequest(table,code,startDate,endDate){

const apiUrl =  `https://api.nbp.pl/api/exchangerates/rates/${table}/${code}/${startDate}/${endDate}/`;
var req =axios.get(apiUrl)
  .then(response =>  response.data)
  .catch(err=>{console.log(err)})
  
  return {
    type: API_REQUEST,
    payload: req
    }
}

export function sendToCalc(num,rate,date){
 return{ 
  type: SEND_TO_CALC,
  payload: { num: num, rate: rate, date: date }
  }
}