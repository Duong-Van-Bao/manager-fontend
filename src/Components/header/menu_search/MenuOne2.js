import React, { Component } from 'react';
import {connect} from 'react-redux';

class MenuOne2 extends Component {
    statusLogOut = (event) => {
        event.preventDefault();
        this.props.changeLogOutStatus()
    }
    render() {
        return (
         <li className="header_navbar-item header_navbar-users headings">
                <img src="https://imgproxy3.cdnforo.com/e5ep-T6UjCfpa5zazdht3EbP4j_TIbUt0ksSnr0kL7M/h:460/plain/http://data.tinhte.vn/data/attachment-files/2020/03/4928356_cover_huawei_chia_se_100_doanh_thu_cho_nha_phat_trien_tren_AppGallery.jpg" alt="Anh mơi" className="header_navbar-user-img" />
                <span href="/" className="header_navbar-user-name">Văn Bảo</span> 
                <ul className="header_navbar-user-menu">
                    <li className="header_navbar-user-item">
                        <a href="/">Tài khoản của tôi</a>
                    </li>
                    <li className="header_navbar-user-item">
                        <a href="/">Địa chỉ của tôi</a>
                    </li>
                    <li className="header_navbar-user-item">
                        <a href="/">Đơn mua</a>
                    </li>
                    <li className="header_navbar-user-item header_navbar-user-item--separate">
                        <a href="/" onClick={(event) => this.statusLogOut(event)}>Đămg xuất</a>
                    </li>
                </ul>
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
        changeLogOutStatus: () => {
            dispatch({
                type:"CHANGE_LOGOUT_STATUS"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuOne2)