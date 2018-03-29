import React ,{Component} from 'react';
import {connect} from 'react-redux';
 
class Calc extends Component{

  constructor(props){
    super(props)
    this.props.rateData;
    this.state = {amount: 0};
  }
  
  render(){
    const { num, date, rate} = this.props.rateData;
    const  multi =Math.round(this.state.amount * rate*100)/100;

    if(num){  var string= `wd. tabeli nr. ${num} z dnia ${date} kurs wynosi: 
                           ${rate} * ${this.state.amount} = ${multi}`  
                string = string.replace( /\.(?=\d)/g , ',')
            }
    
    return (   
      <div>
        <div className='row'>
            <div className="col-sm-6">
              <form >
               {/*  <label htmlFor='amount'>Ile</label> */}
                <input type='number' id='amount' className='form-control'
                        placeholder="0.00"
                        step= "10"
                        autoFocus= 'true'
                        onChange={  ev=>this.setState({ amount: ev.target.value}) }/>

              </form>
             
            </div>
          </div> 
          {string}
        </div>

    )
  }
}
export default connect(state=>{ return { rateData: state.activeRowData} })(Calc) 


