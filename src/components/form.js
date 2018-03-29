import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import  {apiRequest} from '../actions'

class Form extends Component{
  
  fetchData(ev){
    ev.preventDefault();
    var currency = ev.target[0].value;
    var dateFrom = ev.target[1].valueAsDate.toJSON().slice(0,10);
    var dateTo   = ev.target[2].valueAsDate.toJSON().slice(0,10);
   
    this.props.apiRequest('a',currency,dateFrom,dateTo)
  }
  
  render(){
    return (
      <form  onSubmit={ this.fetchData.bind(this) }  className="form-row">
      
          
          <div className="col-sm-3">
            <select className='form-control'>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="chf">CHF</option>
              <option value="gbp">GBP</option>
            </select> 
           </div>
           
           <div className="col-sm-3">
            <input name='fromDate' id='fromDate' type='date'  className="form-control"/>
          </div>
          

          <div className="col-sm-3">
            <input name="toDate" id="toDate" type='date'  className="form-control"/>
          </div>

          <div className="col-sm-3">
            <input  type='submit' value='click' id='btn-submit' className='form-control btn btn-inline btn-success'/>
          </div>
        
       
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {apiRequest}, dispatch)
}
export default connect(null,mapDispatchToProps)(Form)