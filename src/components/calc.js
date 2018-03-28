import React ,{Component} from 'react';
import {connect} from 'react-redux';
 
class Calc extends Component{

  render(){
    return (     
      <textarea>fdfdfdfdfd</textarea>
    )
  }
}
export default connect(state=>{ return {activeRowData} })(Calc) 

/* function mapStateToProps(state){
  return {tableData: state.apiResponse}
} 
export default connect(mapStateToProps)(Table) */

