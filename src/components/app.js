import React, { Component } from 'react';

import Form from './form'
import Table from './table'
import Calc from './calc'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className="row">
           <Form />   
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Table />
          </div>
          <div className="col-sm-6">
           {/*  <Calc /> */}
          </div>
        </div>
      </div>
    );
  }
}
