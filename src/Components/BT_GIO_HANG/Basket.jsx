import React, { Component } from 'react';
import BasketProduct from './BasketProduct';

export default class Basket extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    renderMangSanPhamDuocChon = () => {
        return this.props.mangSanPhamDuocChon.map((item, index) => {
            return <BasketProduct 
                        sp = {item}
                        index = {index}
                        xoaSPGioHang = {this.props.xoaSPGioHang}
                        tinhTienSanPham = {this.tinhTienSanPham}
                    />
        })
    }
    
    tinhTienSanPham = (tien) => {
        console.log(tien);
    }

    render() {
        return (
            <div style={{ width: '80%', margin: '50px auto'}}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMangSanPhamDuocChon()}
                        <tr>
                            <td colSpan="4"><b>Tổng tiền</b></td>
                            <td>
                                {this.tongTien}
                            </td>
                            <td>
                                <button className="btn btn-success">Thanh toán</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
