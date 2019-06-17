import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <div className="bg-dark text-center py-4">
        <h3 className="mb-3">SMARTPHONE</h3>  
        <ProductList />
      </div>
      <div className="bg-white text-center py-4">
        <h3 className="mb-3">LAPTOP</h3>  
        <ProductList />
      </div>


      <Footer />
    </div>
  );
}

export default App;
