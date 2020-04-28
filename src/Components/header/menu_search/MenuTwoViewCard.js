import React, { Component } from 'react';
import {cartData} from  '../../FirebaseConnect';
import MenuTwoViewCardOne from './MenuTwoViewCardOne';

class MenuTwoViewCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            datafirebase:[],
        }
    }    
    componentWillMount() {
        cartData.on('value',(notes) => {
            var arrayData = [];
               notes.forEach(element => {
               const key=element.key;
               const product_name=element.val().product_name;
               const product_price=element.val().product_price;
               const image=element.val().image;
                arrayData.push({
                    id:key,                    
                    product_name:product_name,
                    product_price:product_price,
                    image:image
                })
            });
              this.setState({
                  datafirebase:arrayData
              });
            })
    }      
     cartData = () => {
                if(this.state.datafirebase)
                return this.state.datafirebase.map((value,key)=>{
                    return(
                        <MenuTwoViewCardOne
                        key={key}
                        i={value}
                        productname={value.product_name}
                        productprice={value.product_price}
                        image={value.image}
                        />
                    )
                })       
            };
    render() {
        return (
            <div>
            <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
            <ul className="header__cart-list-item">
            {
                this.cartData()
            }
            </ul>
            <a className="header__cart-view-card btn btn--primary">Xem giỏ hàng </a>
            </div>
        )
    }
}
export default MenuTwoViewCard;