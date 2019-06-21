import React, { Component } from 'react'

export default class GioHang extends Component {

    renderGioHang = () => {
        let mangGioHang = this.props.gioHang;
        return mangGioHang.map((sp, index) => {
            return <tr key={index}>
                <td>
                    <img src={sp.img} alt="" style={{ height: 100 }} />
                </td>
                <td>{sp.name}</td>
                <td>{(sp.giaSP).toLocaleString()}</td>
                <td>
                    <button className="mr-4 btn btn-primary" onClick={() => this.props.tangGiamSoLuong(sp.maSP, false)}>-</button>
                    {sp.soLuong}
                    <button className="ml-4 btn btn-primary" onClick={() => this.props.tangGiamSoLuong(sp.maSP, true)}>+</button>
                </td>
                <td>{(sp.giaSP * sp.soLuong).toLocaleString()} VND</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.xoaGioHang(sp.maSP)}>Xóa</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <table className="table table-bordered table-hover mt-5">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
