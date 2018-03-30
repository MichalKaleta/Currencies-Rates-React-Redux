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
    if(num){  var string= `wd. tabeli nr. ${num} z dnia ${date} kurs wynosi: ${rate} * ${this.state.amount} = ${multi}`  
                   string = string.replace( /\.(?=\d)/g , ',')  
              }
    
    return (   
      <div>
        <div className='row'>
            <div className="col">
              <form onSubmit={(ev)=>{ev.preventDefault();}  }>
               {/*  <label htmlFor='amount'>Ile</label> */}
                <input type='number' id='amount' className='form-control w-50 float-right mb-3'
                        placeholder="0.00"
                        step= "10"
                        autoFocus= 'true'
                        onChange={  ev=>this.setState({ amount: ev.target.value}) }/>
                <textarea className="form-control mb-3" value={string}></textarea>
                <button type='button' className='btn btn-default float-right px-5'
                        onClick={(ev)=>{
                          ev.target.previousSibling.select()
                          document.execCommand("copy");
                         }}
                    >Copy</button>
              </form>
             
            </div>
          </div> 
         
        </div>

    )
  }
}
export default connect(state=>{ return { rateData: state.activeRowData} })(Calc) 


