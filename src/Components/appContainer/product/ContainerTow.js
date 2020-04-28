import React, { Component } from 'react';
import {cartData} from  '../../FirebaseConnect';

class ContainerTow extends Component {    
    addProductCard = (event) => {
        event.preventDefault();
        var item = {};
        item.product_name=this.props.product_name;
        item.product_price=this.props.product_price;
        item.image=this.props.image;          
    cartData.push(item)
    }    
    render() {
        return (
                <div className="col l-2-4 m-4 c-6" onClick={(event) => this.addProductCard(event)}>
                    <a href="/" className="home-products">
                    <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url('+this.props.image+')'}} />
                        <h4 className="home-product-item__name">{this.props.product_name}</h4>
                        <div className="home-product-item__price">
                        <span className="home-product-item__price-old">102.000đ</span>
                        <span className="home-product-item__price-current">{this.props.product_price}</span>
                        </div>
                        <div className="home-product-item__action">
                            <span className="home-product-item__like home-product-item__like--liked">
                                <i className="home-product-item__like-icon-empty far fa-heart" />
                                <i className="home-product-item__like-icon-fill fas fa-heart" />
                            </span>
                            <div className="home-product-item__rating">
                                <i className="home-product-item__rat-gold fas fa-star" />
                                <i className="home-product-item__rat-gold fas fa-star" />
                                <i className="home-product-item__rat-gold fas fa-star" />
                                <i className="home-product-item__rat-gold fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="home-product-item_sold">88 đã bán</span>
                            </div>
                        </div>
                        <div className="home-product-item__origin">
                            <span className="home-product-item__brand">Whoo</span>
                            <span className="home-product-item__origin-name">Nhật Bản</span>         
                        </div>
                        <div className="home-product-item__favourit">
                            <i className="fas fa-check" />
                            <span>Yêu Thích</span>
                        </div>
                        <div className="home-product-item__sale-off">
                            <span className="home-product-item__sale-off-percent">
                                10%
                            </span>
                            <span className="home-product-item__sale-off-label">
                                Giảm
                            </span>
                        </div>
                    </div>
                    </a>
                </div>
        );
    }
}

export default ContainerTow;