import React, { Component } from 'react';
import ProductList from './ProductList';
import Basket from './Basket';
import Modal from './Modal';


export default class BTGIOHANG extends Component {

    mangDienThoai =
        [{
            id: 'sp_1', name: 'iphoneX', price: '30000000', screen: 'screen_1', backCamera:
                'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all - screen design.Face ID, which makes your face your password'
        },
        {
            id: 'sp_2', name: 'Note 7', price: '20000000', screen: 'screen_2', backCamera: 'backCamera_2',
            frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
        },
        {
            id: 'sp_3', name: 'Vivo', price: '10000000', screen: 'screen_3', backCamera: 'backCamera_3',
            frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality'
        },
        {
            id: 'sp_4', name: 'Blacberry', price: '15000000', screen: 'screen_4', backCamera:
                'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
        }]
    mangGioHang = [];
    tongTien = 0;

    constructor(props) {
        super(props);
        this.state = {
            modalContent: {},
            spGioHang: {},
            soLuong: 0,
            money: 0,
            totalMoney: 0
        }
    }

    /**
        1. Xem chi tiết khi click vào button Modal trong Product Component
        2. Sau đó thay đổi thuộc tính modalContent trong state để render lại
    */
    xemChiTiet = (sp) => {
        this.setState({
            modalContent: sp
        })
    }

    /**
        1. Thêm sp vào mảng giỏ hàng khi click button Thêm trong Product Component
        2. Thay đôi thuộc tính spGioHang trong state để render lại
    */
    putGioHang = (sp) => {
        /*
            Nếu (hoặc chiều dài mảng = 0)
                (hoặc sp.id chưa tồn tại trong mảng)
        */
        if (
            (this.mangGioHang.length === 0) ||
            (this.mangGioHang.findIndex((item) => item.id === sp.id) === -1)
        ) {
            this.mangGioHang.push(sp);
        }
        console.log(this.mangGioHang);
        // render lại component
        this.setState({
            spGioHang: sp,
            soLuong: 1
        })
    }

    /*
        1. Duyệt mangGioHang, truyền item về componetn Basket
        2. Truyền thêm 2 function xoaSP và themBotSP
    */
    showGioHang = () => {
        return this.mangGioHang.map((item) => {
            return <Basket
                soLuongSP={this.state.soLuong}
                // themBotSP={this.themBotSP} 
                xoaSP={this.xoaSP} sp={item}
            />
        })
    }

    /*
        1. Sau khi click 2 nút arrow trong ô input (type number) trong Basket component,
        thêm sp vào mangGioHang
    */

    /*
         1. Sau khi click button xóa trong component Basket --> trả về một sp 
         2. Tìm vị trí của sản phẩm đó trong mảng và xóa
     */
    xoaSP = (sp) => {
        // let index = this.mangGioHang.findIndex(item => item.id === sp.id);
        // this.mangGioHang.splice(index, 1);
        // Tạo mảng mới gồm những sản phẩm không trùng id
        this.mangGioHang = this.mangGioHang.filter(item => item.id !== sp.id);
        console.log(this.mangGioHang);

        this.setState({
            spGioHang: {}
        })
    }

    showTongTien = () => {
        if (this.mangGioHang.length === 0) {
            return <tr></tr>
        }
        else {
            return (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th colSpan="2">Thành tiền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showGioHang()}
                        <tr>
                            <td colSpan="4" className="text-right font-weight-bold">Tổng tiền</td>
                            <td colSpan="2"></td>
                            <td><button className="btn btn-success">Thanh toán</button></td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    }

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
                    {this.showTongTien()}
                </div>
                
                {/* Show Modal */}
                <Modal content={this.state.modalContent} key={2} />
            </div>
        )
    }
}



