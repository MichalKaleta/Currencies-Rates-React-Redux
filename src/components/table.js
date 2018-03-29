import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import  {sendToCalc} from '../actions' 

class Table extends Component{

  constructor(props){
    super(props)
    this.props.tableData.rates=[];
  }

  onRowClick(no,mid,date){
    this.props.sendToCalc(no,mid,date )
  }

 renderRows(rate){
  return (
    <tr key={rate.effectiveDate} 
        onClick={()=>this.props.sendToCalc(rate.no,rate.mid,rate.effectiveDate ) }  >

      <td>{rate.no}</td>
      <td>{rate.mid}</td>
      <td>{rate.effectiveDate}</td>
    </tr>
  )
 }

  render(){
    return (     
      <table className='table table-striped table-hover'>
        <thead>
          <tr><th>Num.</th><th>Rate</th><th>Date</th></tr>
        </thead>
        <tbody>
          { this.props.tableData.rates.map( rate=> this.renderRows(rate) ) }
        </tbody>
      </table>
    )
  }
}
  
export default connect( state=>{ 
                              return {tableData: state.apiResponse}
                            },
                        dispatch=>{ 
                              return bindActionCreators( {sendToCalc}, dispatch)
                              }  
                      )(Table) 

/* function mapStateToProps(state){
  return {tableData: state.apiResponse}
} 
export default connect(mapStateToProps)(Table) */

