import React, { Component } from 'react'

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }

    changeStatus = () => {
        this.setState(
            { status: !this.state.status }
        )
        console.log(this.state.status);
    }

    showInfo = () => {
        if (this.state.status) {
            return <p className="card-text">{this.props.sanPham.desc}</p>
        }
        else {
            return '';
        }
    }

    render() {

        let { name, img } = this.props.sanPham;
        return (
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="card" style={{}}>
                    <img className="card-img-top" src={img} alt="Card image" style={{ width: '100%', height: 250 }} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        {this.showInfo()}
                        <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={() => this.props.xemChiTiet(this.props.sanPham)}>Modal</button>
                        <button className="btn btn-success" onClick={() => this.changeStatus()}>Show Info</button>
                        <button className="btn btn-danger">Card</button>
                    </div>
                </div>
            </div>
        )
    }
}
