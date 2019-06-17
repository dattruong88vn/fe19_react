import React, { Component } from 'react'

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }
    
    changeStatus= () => {
        this.setState(
            {status: !this.state.status}
        )
        console.log(this.state.status);
    }

    moTa ='Some example text some example text. John Doe is an architect and engineer';
    showInfo = () => {
        if (this.state.status) {
            return <p className="card-text">{this.moTa}</p>
        }
        else {
            return '';
        }
    }

    render() {
        return (
            <div>
                <div className="card" style={{  }}>
                    <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ width: '100%' }} />
                    <div className="card-body">
                        <h4 className="card-title">Iphone X</h4>
                        {this.showInfo()}                        
                        <button className="btn btn-primary">Modal</button>
                        <button className="btn btn-success" onClick={ () => this.changeStatus() }>Show Info</button>
                        <button className="btn btn-danger">Card</button>
                    </div>
                </div>
            </div>
        )
    }
}
