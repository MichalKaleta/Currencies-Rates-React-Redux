import axios from 'axios'

export const API_REQUEST ='API_REQUEST';

export function apiRequest(table,code,startDate,endDate){

const apiUrl =  `http://api.nbp.pl/api/exchangerates/rates/${table}/${code}/${startDate}/${endDate}/`;

var req =axios.get(apiUrl)
  .then(response =>  response.data)
  .catch(err=>{console.log(err)})
  
  return {
    type: API_REQUEST,
    payload: req
    }
}