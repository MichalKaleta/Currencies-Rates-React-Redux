import React ,{Component} from 'react';
import {connect} from 'react-redux';
 
class Table extends Component{

  constructor(props){
    super(props)
    this.props.tableData.rates=[];
  }

 renderRows(rate){
  console.log("aaaa")
  return (
    <tr key={rate.effectiveDate} >
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
export default connect(state=>{ return {tableData: state.apiResponse} })(Table) 

/* function mapStateToProps(state){
  return {tableData: state.apiResponse}
} 
export default connect(mapStateToProps)(Table) */

