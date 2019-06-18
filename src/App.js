import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Onclass from './Components/ONCLASS/Onclass';
import BTGIOHANG from './Components/BT_GIO_HANG/BTGIOHANG';



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
