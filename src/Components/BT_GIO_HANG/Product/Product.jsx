import React, { Component } from 'react';
import './Product.scss';

export default class Product extends Component {

    render() {
        let {name, img, desc, price} = this.props.sp;
        return (
            <div className="col-12 col-sm-6 col-lg-3 px-1 myProduct">
                <div className="card">
                    <div className="card-top">
                        <img className="card-img-top" src={img} />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title" style={{}}>{name}</h4>
                        <p>{(price).toLocaleString()} VND</p>
                        <div className="card-content">
                            {/* Button xem chi tiết */}
                            <button
                                className="btn btn-primary"
                                data-toggle="modal"
                                data-target="#xemChiTietSanPham"
                                onClick={() => this.props.xemThongTin(this.props.sp)}
                            >Xem</button>

                            {/* Button chọn sản phẩm */}
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

