import React, { Component } from 'react';
import './App.css';
import BTGIOHANG from './Components/BT_GIO_HANG/BTGIOHANG';
import Onclass from './Components/ONCLASS/Onclass';


export default class App extends Component {


  render() {
    return (
      <div>
        {/* <Onclass /> */}
        <BTGIOHANG />
      </div>
    )
  }
}
