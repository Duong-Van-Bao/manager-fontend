import React, { Component } from 'react';
import {signupData} from '../../FirebaseConnect';
import {connect} from 'react-redux'
import LoginUsert from './LoginUsert'

class Login extends Component {
 constructor(props) {
   super(props);
   this.state={
    datafirebase:[],
    DataInfo:'',   
   }
 } 
componentWillMount() {
  signupData.on('value',(notes) => {
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
 checkLoginData = () => {
   if(this.state.datafirebase && this.state.DataInfo){
     return this.state.datafirebase.forEach((item) => {
          var ketqua = [];
          if(item.product_name.indexOf(this.state.DataInfo.signup) !== -1
          & item.product_price.indexOf(this.state.DataInfo.Login) !== -1){
             return(   ketqua.push(item),
                       this.props.changeEditStaturs(),
                       this.props.changeLoginStatus()
             )}
            // else{
            //   return( alert('Bạn! \nĐăng Nhập Sai Mật Khẩu ?' )) 
            // }
        console.log('đã vào được rồi:' + ' ' + JSON.stringify(ketqua));
        //console.log('đây là ảnh:' + ' ' + JSON.stringify(this.state.DataInfo.signup) + ' ' + item.        product_name);  
      })
   }
 }

checkLogin = (info) => {
     this.setState({
       DataInfo:info
     });    
 }
  render() {
      // console.log(JSON.stringify(this.state.DataInfo.Login) + 'dữ liệu login');
      // console.log(JSON.stringify(this.state.datafirebase) + 'dữ liệu ');
      return (
      <form>
      <div className="modal">
        <div className="modal_overlay" />  
        <div className="modal_body">
        <div className="auth-form">
          <div className="auth_form-contarner">
            <div className="authe_form-header">
              <h3 className="authe_form-deading">Đăng nhập</h3>
              <span className="authe_form-switch--btn" onClick={() =>this.props.changeEditStaturs(this.props.changeEditStatus())}>Đăng ký</span>
            </div>
            {
              this.checkLoginData()
            }
            <LoginUsert
              textLogin={(info) => this.checkLogin(info)}         
            />
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
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStaturs: () => {
      dispatch({
        type:"CHANGE_EDIT_STATURS"
      })
    },
    changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    },
    changeLoginStatus: () => {
      dispatch({
        type:"CHANGE_LOGIN_STATUS"
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
