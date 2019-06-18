import React, { Component } from 'react'

export default class Product extends Component {

    render() {

        let {name, img} = this.props.sanPham;
        return (
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="card" style={{}}>
                    <img className="card-img-top" src={img} alt="Card image" style={{ width: 'unset', height: 180 }} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={() => this.props.xemChiTiet(this.props.sanPham)}>Modal</button>
                        <button className="btn btn-danger" onClick={ () => this.props.putGioHang(this.props.sanPham)}>Thêm</button>
                    </div>
                </div>
            </div>
        )
    }
}
