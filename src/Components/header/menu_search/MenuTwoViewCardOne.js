import React, { Component } from 'react';
import {connect} from 'react-redux'

class MenuTwoViewCardOne extends Component {
    deleteData = () => {
          this.props.deleteCartData(this.props.i.id)
    }
    render() {
        return (
            <li className="header__cart-item">
                <img src={this.props.image} alt="Ảnh sản phẩm" className="header__cart-img" />
                <div className="header__cart-item-info">
                        <div className="header__cart-item-head">
                            <h5 className="header__cart-item-name">{this.props.productname}</h5>
                            <div className="header__cart-item-price-wrap">
                                <span className="header__cart-item-price">{this.props.productprice}</span>
                                <span className="header__cart-item-multipl">x</span>
                                <span className="header__cart-item-qnt">2</span>
                            </div>
                        </div>
                    <div className="header__cart-item-body">
                        <span className="header__cart-item-description">
                        Phân loại :Bạc
                        </span>
                        <span className="header__cart-item-remove" onClick={() => this.deleteData()}>xóa</span>
                    </div>
                </div>
                </li>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteCartData: (deleteCart) => {
            dispatch({
                type:"DELETE_CART_DATA",
                deleteCart
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuTwoViewCardOne)