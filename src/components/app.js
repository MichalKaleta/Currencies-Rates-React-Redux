import React, { Component } from 'react';

import Form from './form'
import Table from './table'
import Calc from './calc'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row mb-3">
          <div className="col-12">
            <nav className=" row justify-content-between navbar navbar-expand-lg navbar-light bg-light">
           
              <div className="col-md-3">  
                 <a className="navbar-brand" href="#"><h1>Exchange Rates</h1></a>
              </div>
              <div className="col-md-7">
                <Form />  
              </div>
          </nav>
        </div>
      </div>
        
        <div className="row">
          <div className="col-sm-6">
            <Table />
          </div>
          <div className="col-sm-6">
            <Calc /> 
          </div>
        </div>
      </div>
    );
  }
}
