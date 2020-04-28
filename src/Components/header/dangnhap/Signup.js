import React, { Component } from 'react';
import {connect} from 'react-redux'

class Signup extends Component {
   constructor(props) {
     super(props);
     this.state={
       product_name:'',
       product_price:'',
       image:''
     }
   }
   isChange = (event) => {
     var name=event.target.name;
     var value =event.target.value;
     console.log(name);
     console.log(value);      
       this.setState({
         [name]:value
       });      
   } 
   handleClick = (name,price,image) =>{
    var item = {};
    item.product_name=name;
    item.product_price=price;
    item.image=image;
    this.props.addDataStore(item);
  }
    render() { 
        return (
          <form>
            <div className="modal">
            <div className="modal_overlay" />  
            <div className="modal_body">
              <div className="auth-form">
                <div className="auth_form-contarner">
                  <div className="authe_form-header">
                    <h3 className="authe_form-deading">Đăng ký</h3>
                    <span className="authe_form-switch--btn" onClick={() => this.props.changeEditStatus(this.props.changeEditStaturs())}>Đăng nhập</span>
                  </div>
                  <div className="auth_form-form">
                    <div className="auth_form-group">
                      <input type="text" name="product_name" onChange={(event) => this.isChange(event)}  className="auth_form-input" placeholder="Nhập gmail của bạn" />
                    </div>
                    <div className="auth_form-group">
                      <input type="password" name="product_price" onChange={(event) => this.isChange(event)}  className="auth_form-input" placeholder="mật khẩu của bạn" />
                    </div>
                    <div className="auth_form-group">
                      <input type="password" name="image" onChange={(event) => this.isChange(event)}  className="auth_form-input" placeholder="Nhập lại mật khẩu của bạn" />
                    </div>
                    <div className="auth_form-aside">
                      <p className="auth_form-policy--text">
                        Bằng việc đăng ký bạn đã đồng ý với ứng dụng về 
                        <a href="/" className="auth_form-policy--link">Điều khoản dịch vụ</a>&amp;
                        <a href="/" className="auth_form-policy--link">Chính sách bảo mật</a>
                      </p>
                    </div>
                    <div className="auth_form-controls">
                      <button className="btn btn--normal auth_form-controls-back" onClick={() => this.props.changeEditStatus()}>TRỞ LẠI</button> 
                      <button type="reset" onClick={() =>this.handleClick(this.state.product_name,this.state.product_price,this.state.image) } className="btn btn--primary">ĐĂNG KÝ</button>                                  
                    </div> 
                  </div>
                  <div className="auth_form-socials">
                    <a href="/" className="auth_form-socials--facebook btn btn-size--s btn_with-icon">
                      <i className="auth_form-socials-icon fab fa-facebook-square" />        
                      <span className="auth_form-socials--title">
                        Kết nối với Facebook</span>
                    </a>
                    <a href="/" className="auth_form-socials--google btn btn-size--s btn_with-icon">
                      <i className="auth_form-socials-icon fab fa-google" />    
                      <span className="auth_form-socials--title">
                        kết nối với Google</span>                                
                    </a>
                  </div>                                    
                </div>            
              </div> 
            </div>
          </div>
          </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    testThoi: state.testConnect,
  }
}
//this.props.testThoi
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({
        type:"ADD_DATA",
        getItem
      })
    },
     changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    },
    changeEditStaturs: () => {
      dispatch({
        type:"CHANGE_EDIT_STATURS"
      })
    }
  }
}
//this.props.addDataStore
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
// export default Signup;