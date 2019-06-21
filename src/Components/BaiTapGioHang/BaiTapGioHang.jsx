import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import GioHang from './GioHang';

export default class BaiTapGioHang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gioHang: [
                { maSP: 0, tenSP: 'mặc định', giaSP: 1000, img: 'img', soLuong: 1, tongTien: 1000 }
            ],
            tongTien: 0
        }
    }

    mangSanPham = [
        {
            id: 'sp_1', name: 'iphoneX', price: 30000000, screen: 'screen_1', backCamera:
                'backCamera_1', frontCamera: 'frontCamera_1', img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all - screen design.Face ID, which makes your face your password'
        },
        {
            id: 'sp_2', name: 'Note 7', price: 20000000, screen: 'screen_2', backCamera: 'backCamera_2',
            frontCamera: 'frontCamera_2', img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
        },
        {
            id: 'sp_3', name: 'Vivo', price: 10000000, screen: 'screen_3', backCamera: 'backCamera_3',
            frontCamera: 'frontCamera_3', img: './img/sp_vivo850.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality'
        },
        {
            id: 'sp_4', name: 'Blacberry', price: 15000000, screen: 'screen_4', backCamera:
                'backCamera_4', frontCamera: 'frontCamera_4', img: './img/sp_blackberry.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
        }
    ]

    chonSanPham = (sp) => {
        let spGioHang = {
            maSP: sp.id,
            tenSP: sp.name,
            giaSP: sp.price,
            img: sp.img,
            soLuong: 1,
            tongTien: 1000
        }

        // tạo mảng trung gian để push vào mảng trong state
        const gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(item => item.maSP === spGioHang.maSP);
        
        if (index === -1) {
            gioHangCapNhat.push(spGioHang);
        }
        else {
            gioHangCapNhat[index].soLuong += 1;
        }
        this.setState({
            gioHang: gioHangCapNhat,
        })
    }

    xoaGioHang = (maSP) => {
        let index = this.state.gioHang.findIndex(item => item.maSP === maSP);
        if (index !== -1) {
            this.state.gioHang.splice(index, 1);
        }
        this.setState({
            gioHang: this.state.gioHang
        })
    }

    tangGiamSoLuong = (maSP, status) => {
        let index = this.state.gioHang.findIndex((item) => item.maSP === maSP);
        if (index !== -1)
            if (status) {
                this.state.gioHang[index].soLuong++;
            }
            else {
                if (this.state.gioHang[index].soLuong > 1) {
                    this.state.gioHang[index].soLuong -= 1;
                }
                else {
                    alert('Số lượng 1 không thể giảm!')
                }
            }
        this.setState({
            gioHang: this.state.gioHang
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài tập Giỏ Hàng</h3>
                <DanhSachSanPham
                    mangSanPham={this.mangSanPham}
                    chonSanPham={this.chonSanPham}
                />

                <GioHang
                    gioHang={this.state.gioHang}
                    tongTien={this.state.tongTien}
                    xoaGioHang={this.xoaGioHang}
                    tangGiamSoLuong={this.tangGiamSoLuong}
                />

                <div className="text-right">
                    {
                        (this.state.gioHang.reduce((tongTien, item) => {
                            return tongTien += item.soLuong * item.giaSP;
                        }, 0)).toLocaleString()
                    }
                </div>
            </div>
        )
    }
}
