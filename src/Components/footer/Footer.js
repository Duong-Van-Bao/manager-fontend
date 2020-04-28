import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
<footer className="footer">
  <div className="row">
    <div className="col l-2-4 m-4 c-6">
      <h3 className="footer__heading">Chăm sóc khách hàng</h3>
      <ul className="footer-list">
        <li className="footer-item">
          <a href="/" className="footer-item_link">Trung Tâm Trợ Giúp</a>
          <a href="/" className="footer-item_link">AppFB</a>
          <a href="/" className="footer-item_link">Hướng dẫn mua hàng</a>
        </li>
      </ul>
    </div>
    <div className="col l-2-4 m-4 c-6">
      <h3 className="footer__heading">Giới thiệu</h3>
      <ul className="footer-list">
        <li className="footer-item">
          <a href="/" className="footer-item_link">Giới thiệu</a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-item_link">Tuyển dụng</a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-item_link">Điều khoản</a>
        </li>
      </ul>
    </div>
    <div className="col l-2-4 m-4 c-6">
      <h3 className="footer__heading">Danh mục</h3>
      <ul className="footer-list">
        <li className="footer-item">
          <a href="/" className="footer-item_link">Trang điểm mặt</a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-item_link">Trang điểm mắt</a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-item_link">trang điểm môi</a>
        </li>
      </ul>
    </div>
    <div className="col l-2-4 m-4 c-6">
      <h3 className="footer__heading">Theo dõi</h3>    
      <ul className="footer-list">
        <li className="footer-item">
          <a href="https://www.facebook.com/" className="footer-item_link">
            <i className="footer-item__icon fab fa-facebook" />
            facebook
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.instagram.com/" className="footer-item_link">
            <i className="footer-item__icon fab fa-instagram" />
            Instagram
          </a>
        </li>
        <li className="footer-item">    
          <a href="/" className="footer-item__icon footer-item_link">
            <i className="fab fa-linkedin" />
            Linkedin
          </a>
        </li>
      </ul>
    </div>
    <div className="col l-2-4 m-8 c-6">
      <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
      <div className="footer__download">
        <img src="./img/qa_code.png" alt="ảnh qr" className="footer__download-qr" />
        <div className="footer__download-apps">
          <a href="/" className="footer__download-apps">
            <img src="./img/app_chplay.png" alt="ảnh chplay" className="footer__download-app-img" />
          </a>
          <a href="/" className="footer__download-apps">                     
            <img src="./img/app_store.png" alt="ảnh chplay" className="footer__download-app-img" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer__bottom">
    <div className="grid wide">
      <p className="footer-text">2019 - Bản quyền thuộc về Công ty BA</p>
    </div>
  </div>
</footer>
        );
    }
}

export default Footer;