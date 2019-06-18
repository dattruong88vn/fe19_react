import React, { Component } from 'react';
import ProductList from './ProductList';
import Basket from './Basket';
import Modal from './Modal';

export default class BTGIOHANG extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalContent: {},
            spGioHang: {}
        }
    }

    xemChiTiet = (sp) => {
        this.setState({
            modalContent: sp
        })
    }

    putGioHang = (sp) => {
        this.setState({
            spGioHang: sp
        })
    }

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


    render() {
        return (
            <div className="container w-75">
                {/* Hiển thị sản phẩm */}
                <div className="text-center">
                    <h2>DANH SÁCH SẢN PHẨM</h2>
                    <div>
                        <ProductList xemChiTiet={this.xemChiTiet} putGioHang={this.putGioHang} mangSP={this.mangDienThoai} key={1} />
                    </div>
                </div>
                {/* Lời chào */}
                <div className='btn btn-warning my-4'>Chào mừng shopping online</div>

                {/* Giỏ hàng */}
                <div className="container">
                    <Basket spGioHang={this.state.spGioHang} key={1}/>
                </div>
                <Modal content={this.state.modalContent} key={2}/>
            </div>
        )
    }
}



