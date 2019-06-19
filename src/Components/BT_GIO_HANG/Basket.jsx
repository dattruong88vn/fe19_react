import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';

export default class Basket extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }




    render() {
        return (
            <tr>
                <th><img src={this.props.sp.img} style={{ height: 100 }} /></th>
                <th>{this.props.sp.name}</th>
                <th><CurrencyFormat value={this.props.sp.price} prefix={'$ '} thousandSeparator={true} /></th>
                <th>
                    <input
                        type="number"
                        placeholder='1'
                        min="1"
                        pattern="[0-9]*" 
                        inputMode="numeric"
                        onChange={() => this.props.themBotSP(this.props.sp)}
                    />
                </th>
                <th colSpan="2"></th>
                <th><button className="btn btn-danger" onClick={() => this.props.xoaSP(this.props.sp)}>Xoá</button></th>
            </tr>
        )
    }
}

