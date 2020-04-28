import React, { Component } from 'react';
import {connect} from 'react-redux'

class LoginUsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
       signup:'',
       login:''
    }
  }
  
  isChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
       this.setState({
       [name]:value
     }); 
  }  
    onLogin = (signup1,login1) => {
      var info ={};
      info.signup =signup1;
      info.Login =login1;
      // console.log(JSON.stringify(info.signup) + 'dữ liệu login');
      this.props.textLogin(info)
    }
    render() {
      // console.log(this.state.signup + "đăng ký");
        return (
          <div className="auth_form-form">
          <div className="auth_form-group">
              <input type="text" name="signup" onChange={(event) => this.isChange(event)} className="auth_form-input" placeholder="Nhập gmail của bạn" />
          </div>
          <div className="auth_form-group">
             <input type="password" name="login"  onChange={(event) => this.isChange(event)} className="auth_form-input" placeholder="mật khẩu của bạn" />
          </div>
          <div className="auth_form-aside">
            <div className="auth_form-help">
              <a href="/" className="auth_form-link auth_form-link--forgot">Quên mật khẩu</a>
              <span className="auth_form-help--separate" />
              <a href="/" className="auth_form-link">Cần trợ giúp?</a>
            </div>
          </div>
          <div className="auth_form-controls">
            <button className="btn btn--normal auth_form-controls-back" onClick={() => this.props.changeEditStaturs()}>TRỞ LẠI</button> 
            <button type="reset" className="btn btn--primary" onClick={() => this.onLogin(this.state.signup,this.state.login)}>ĐĂNG NHẬP</button>                                  
          </div> 
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
    changeEditStaturs: () => {
      dispatch({
        type:"CHANGE_EDIT_STATURS"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginUsert)