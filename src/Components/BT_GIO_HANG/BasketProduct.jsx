import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';

export default class BasketProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 1,
        }
    }

    tongTien = this.props.sp.price;

    changeAmount = () => {
        this.tongTien = document.getElementsByTagName('input')[this.props.index].value * this.props.sp.price;
        this.setState({
            amount: document.getElementsByTagName('input')[this.props.index].value,
        })
    }

    eventOnChangeValueInput = () => {
        this.changeAmount();
        this.props.tinhTienSanPham(this.tongTien);
    }

    render() {
        return (
            <tr>
                <td>
                    <img src={this.props.sp.img} style={{ height: 100 }} />
                </td>
                <td>
                    <b>{this.props.sp.name}</b>
                </td>
                <td>
                    {this.props.sp.price}
                </td>
                <td>
                    <input
                        className="input"
                        type="number"
                        min="1"
                        value={this.state.amount}
                        onChange={ () => this.eventOnChangeValueInput() }
                    />
                </td>
                <td>
                    {this.tongTien}
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.props.xoaSPGioHang(this.props.spChoosen)}
                    >Xóa</button>
                </td>
            </tr>
        )
    }
}
