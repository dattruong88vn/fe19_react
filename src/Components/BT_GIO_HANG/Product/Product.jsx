import React, { Component } from 'react';
import './Product.scss';

export default class Product extends Component {

    render() {
        return (
            <div className="col-12 col-sm-6 col-lg-3 myProduct">
                <div className="card">
                    <div className="card-top">
                        <img className="card-img-top" src={this.props.sp.img} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title" style={{}}>{this.props.sp.name}</h4>
                        <div className="card-content">
                            {/* Button xem chi tiết */}
                            <button
                                className="btn btn-primary"
                                data-toggle="modal"
                                data-target="#xemChiTietSanPham"
                                onClick={() => this.props.xemThongTin(this.props.sp)}
                            >Xem</button>

                            {/* Button thêm và xóa */}
                            <button
                                className="btn btn-success"
                                onClick={() => this.props.chonSanPham(this.props.sp)}
                            >Thêm</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

