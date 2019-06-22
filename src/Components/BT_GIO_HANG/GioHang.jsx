import React, { Component } from 'react';

export default class GioHang extends Component {

    renderMangGioHang = () => {
        return this.props.mangGioHang.map((item, index) => {
            return <tr>
                <td>
                    <img src={item.img} alt="" style={{ height: 100 }} />
                </td>
                <td>{item.name}</td>
                <td>{(item.price).toLocaleString()}</td>
                <td>
                    <button className="btn btn-secondary mr-3" onClick={() => this.props.tangGiamSoLuongGioHang(item.id, false)}>-</button>
                    {item.soLuong}
                    <button className="btn btn-secondary ml-3" onClick={() => this.props.tangGiamSoLuongGioHang(item.id, true)}>+</button>
                </td>
                <td>{(item.price * item.soLuong).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.xoaSanPhamGioHang(item.id)}>Xóa</button>
                </td>
            </tr>
        })
    }


    render() {
        return (
            <div style={{ width: '80%', margin: '50px auto' }}>
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
                        {this.renderMangGioHang()}
                        <tr>
                            <td colSpan="4"><b>Tổng tiền</b></td>
                            <td>{(this.props.tongTien).toLocaleString()}</td>
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
