import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import Modal from './Components/Modal';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalContent: {}
    }
  }

  mangLapTop = [
    { id: 'sp_1', name: 'Macbook', price: '30.000.000 VNĐ', img: './img/lt_macbook.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
    { id: 'sp_2', name: 'Asus Rog', price: '20.000.000 VNĐ', img: './img/lt_rog.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },
    { id: 'sp_3', name: 'HP Book', price: '10.000.000 VNĐ', img: './img/lt_hp.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },
    { id: 'sp_4', name: 'Lenovo Thinkpad', price: '15.000.000 VNĐ', img: './img/lt_lenovo.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed' }
  ]

  mangDienThoai = [{
    id: 'sp_1', name: 'iphoneX', price: '30.000.000 VNÄ• ', screen: 'screen_1', backCamera:
      'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all - screen design.Face ID, which makes your face your password'
  },
  {
    id: 'sp_2', name: 'Note 7', price: '20.000.000 VNÄ• ', screen: 'screen_2', backCamera: 'backCamera_2',
    frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
  },
  {
    id: 'sp_3', name: 'Vivo', price: '10.000.000 VNÄ• ', screen: 'screen_3', backCamera: 'backCamera_3',
    frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality'
  },
  {
    id: 'sp_4', name: 'Blacberry', price: '15.000.000 VNÄ• ', screen: 'screen_4', backCamera:
      'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
  }
  ]

  xemChiTiet = (sp) => {
    this.setState({
      modalContent: sp
    })
  }


  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <Carousel />
          <div className="bg-dark text-center py-4">
            <h3 className="mb-3 text-white">SMARTPHONE</h3>
            <ProductList xemChiTiet={this.xemChiTiet} mangSP={this.mangDienThoai} key={1}/>
          </div>
          <div className="bg-white text-center py-4">
            <h3 className="mb-3">LAPTOP</h3>
            <ProductList xemChiTiet={this.xemChiTiet} mangSP={this.mangLapTop} ket={2}/>
          </div>
          <Footer />
        </div>
        <Modal content={this.state.modalContent}/>
      </div>
    )
  }
}
