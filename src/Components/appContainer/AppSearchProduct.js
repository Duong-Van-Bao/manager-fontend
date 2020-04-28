import React, { Component } from 'react';
import ContainerTow from './product/ContainerTow';

class AppSearchProduct extends Component {
  getData = () => this.props.dataUserProps.map((value,key) => {
                                return (
                                <ContainerTow
                                key={key}
                                product_name={value.product_name}
                                product_price={value.product_price}
                                image={value.image}
                                />                    
                                )
                         });
  getDataSearch = () =>  this.props.searchInfo.map((value,key) => {
                           return (
                           <ContainerTow
                           key={key}
                           product_name={value.product_name}
                           product_price={value.product_price}
                           image={value.image}
                           />                    
                           )
                    })                                                                                 
    render() {
       console.log('đây là dữ liệu truyền xuống từ tìm kiếm chi tiết:' + '' + JSON.stringify(this.props.searchInfo));
        return (
            <div className="home-product">
            <div className="row sm-gutter">
            {
               this.getDataSearch()
            }            
            {
               this.getData()
            }
             </div>
          </div>
        )
    }
}
export default AppSearchProduct;