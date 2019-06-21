import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        // Bóc tách
        let {id, name, price, img, desc} = this.props.sp;
        let {sp} = this.props; 

        return (
            <div className="col-12 col-sm-6 col-md-3 px-0" style={{ display: 'flex' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '20px 0' }}>
                    <div style={{ flexShrink: '1 1 auto' }}>
                        <img className="card-img-top" src={img} alt="img" style={{}} />
                    </div>
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <h4 className="card-title">{name}</h4>
                        <p>{ price.toLocaleString() } VND </p>
                        <div>
                            <button className="btn btn-primary" onClick = { () => this.props.chonSanPham(sp)}>Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
