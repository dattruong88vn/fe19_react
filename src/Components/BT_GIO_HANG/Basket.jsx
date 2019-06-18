import React, { Component } from 'react'

export default class Basket extends Component {

    constructor(props) {
        super(props);
        this.state ={
            delete : true
        }
    }

    mangGioHang = [];
    // tongTien = 0;

    showGioHang = () => {
        if ((this.props.spGioHang.id) && (this.mangGioHang.findIndex(item => item.id === this.props.spGioHang.id) === -1)) {
            this.mangGioHang.push(this.props.spGioHang);
        }
        console.log(this.mangGioHang);

        return this.mangGioHang.map((item) => {
            return <tr>
                        <td><img style={{ height: 100 }} src={item.img} /></td>
                        <td>{item.name}</td>
                        <td>{item.price.slice(0, -6)}</td>
                        <td><input type="number" placeholder='1'/></td>
                        <td>{}</td>
                        <td><button className="btn btn-danger" onClick = {() => this.xoaSP(item)}>Xóa</button></td>
                    </tr>
        })
    }

    showTongTien = () => {
        if (this.mangGioHang.length !== 0) {
            return <tr>
                <td colSpan='4'>Tổng tiền</td>
                <td></td>
                <td><button className="btn btn-success">Thanh Toán</button></td>
            </tr>
        }
        return <tr></tr>
    }

    xoaSP = (sp) => {
        let index = this.mangGioHang.findIndex(item => item.id === sp.id);
        console.log(this.mangGioHang);
        this.mangGioHang.splice(index, 1);
        console.log(this.mangGioHang);
        console.log(this.props.spGioHang);
        this.setState({
            delete: false,
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showGioHang()}
                        {this.showTongTien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

{/* <input type="number" placeholder='0'/> */ }