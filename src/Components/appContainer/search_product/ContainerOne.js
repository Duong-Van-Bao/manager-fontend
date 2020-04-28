import React, { Component } from 'react';
import {connect} from 'react-redux'

class ContainerOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddproduct:""
        }
    }

    handleAdd = (event) => {
        event.preventDefault();
        var a ="Sữa Rửa Mặt";
        this.setState({
            isAddproduct:a
        }); 
        this.props.changeAddStatus(this.state.isAddproduct)
    }
    render() {
        console.log(JSON.stringify(this.state.isAddproduct));
        return (
            <div className="col l-2 m-0 c-0">
            <nav className="category">
                <h3 className="category_heading">Danh mục</h3>
                <ul className="category-list">
                <li className="category-item category-item--active">
                    <a href="/" className="category-item_link" onClick={ (event) => this.handleAdd(event)}>Trang điểm mặt</a>
                </li>
                <li className="category-item">
                    <a href="/" className="category-item_link">Trang điểm môi</a>
                </li>
                <li className="category-item">
                    <a href="/" className="category-item_link">Trang điểm mắt</a>
                </li>
                </ul>
            </nav>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
     
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeAddStatus: (isAddsearch) => {
            dispatch({
                type:"SEARCH_INFO",
                isAddsearch
            })
        },
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerOne);