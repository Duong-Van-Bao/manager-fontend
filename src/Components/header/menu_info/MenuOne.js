import React, { Component } from 'react';
import {connect} from 'react-redux';
import Signup from '../dangnhap/Signup';
import Login from '../dangnhap/Login'
import MenuOne2 from '../menu_search/MenuOne2';

class MenuOne extends Component {    
    showSignup = () => {
        if(this.props.isEdit){
            return <Signup/>
        }        
     }
     showLogin = () => {
         if(this.props.isEdits){
              return <Login/>
         }
     }
     showUser = () => {
         if(this.props.isLogin){
             return (
             <MenuOne2/>
             )
         }else{
             return(
                 <div>
                <li className="header_navbar-item header_navbar-item--bole header_navbar-item--position" 
                onClick={() => 
                   this.props.changeEditStatus()}
                >
                   Đăng ký</li>
                <li className="header_navbar-item header_navbar-item--bole header_navbar-item--position" onClick={() => this.props.changeEditStaturs()}>
                   Đăng Nhập</li>
                   </div>
             )}
     }
     logOut = () => {
        if(this.props.isLogOut){
            return(<Signup/>,<Login/>)   
        }
    }
    render() {
        return (
            <nav className="header_navbar hide-on-mobile-tablet">
            <ul className="header_navbar-list">
                <li className="header_navbar-item header_navbar-item--has-qr header_navbar-item--position">Vào cửa hàng trên ứng dụng AppFB
                <div className="header-qr">
                    <img src="./img/qa_code.png" alt="QR code" className="header__qr-img" />
                    <div className="header-qr-apps">
                    <a href="/" className="header-qr-link">
                        <img src="./img/app_chplay.png" alt="Google play" className="header__qr-download-img" />
                    </a>
                    <a href="/" className="header-qr-link">
                        <img src="./img/app_store.png" alt="App Store" className="header__qr-download-img" />
                    </a>
                    </div>
                </div>
                </li>
                <li className="header_navbar-item">
                <span className="header_navbar-title--no-pointer">Kết nối</span>
                <a href="https://www.facebook.com/" className="header_navbar-icon--link"><i className=" header_navbar-icon fab fa-facebook" /></a>
                <a href="https://www.instagram.com/" className="header_navbar-icon--link"><i className=" header_navbar-icon fab fa-instagram" /></a>
                </li>
            </ul>
            <ul className="header_navbar-list">
                <li className="header_navbar-item header_navbar-item--has--notify"><a className="header_navbar-item--link" href="/">
                    <i className="header_navbar-icon far fa-bell" />
                    Thông báo</a>
                <div className="header-notify">
                    <header className="header_notify-header">
                    <h3>Thông Báo Mới Nhận</h3>
                    </header>
                    <ul className="header_notify-list">
                    <li className="header_notify-item header_notify-item--viewed">
                        <a href="/" className="header_notify-link">
                        <img src="https://cf.shopee.vn/file/bc155390b6d330128cd4db717be28b88_tn" alt="ảnh mĩ phẩm" className="header_notify-img" />
                        <div className="header_notify-info">
                            <span className="header_notify-name">Mỹ phẩm ohui Chính hãng</span>
                            <span className="header_notify-descriotion">Mô tả mĩ phẩm Ohui chính hãng<span>
                            </span></span></div>
                        </a>
                    </li>
                    <li className="header_notify-item">
                        <a href="/" className="header_notify-link">
                        <img src="https://cf.shopee.vn/file/bc155390b6d330128cd4db717be28b88_tn" alt="ảnh mĩ phẩm" className="header_notify-img" />
                        <div className="header_notify-info">
                            <span className="header_notify-name">Mỹ phẩm ohui Chính hãng</span>
                            <span className="header_notify-descriotion">Mô tả mĩ phẩm Ohui chính hãng<span>
                            </span></span></div>
                        </a>
                    </li>
                    <li className="header_notify-item">
                        <a href="/" className="header_notify-link">
                        <img src="https://cf.shopee.vn/file/bc155390b6d330128cd4db717be28b88_tn" alt="ảnh mĩ phẩm" className="header_notify-img" />
                        <div className="header_notify-info">
                            <span className="header_notify-name">Mỹ phẩm ohui Chính hãng</span>
                            <span className="header_notify-descriotion">Mô tả mĩ phẩm Ohui chính hãng<span>
                            </span></span></div>
                        </a>
                    </li>
                    </ul>
                    <footer className="header_notify-footer">
                    <a href="/" className="header_notify-footer-btn">xem tất cả</a>
                    </footer>
                </div>   
                </li> 
                <li className="header_navbar-item"><a className="header_navbar-item--link" href="/"><i className="header_navbar-icon far fa-question-circle" />Trợ giúp</a></li>                
                <div>
                 {
                   this.showUser()
                 }
                 {
                     this.showSignup()
                 }
                 {
                     this.showLogin()
                 }
                 {
                     this.logOut()
                 }
                </div>
            </ul>
            </nav>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit,
        isEdits: state.isEdits,
        isLogin: state.isLogin,
        isLogOut: state.isLogOut
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        changeEditStaturs: () => {
            dispatch({
                type:"CHANGE_EDIT_STATURS"
            })
        },
        changeLoginStatus: () => {
            dispatch({
              type:"CHANGE_LOGIN_STATUS"
            })
          },
          changeLogOutStatus: () => {
            dispatch({
                type:"CHANGE_LOGOUT_STATUS"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuOne);