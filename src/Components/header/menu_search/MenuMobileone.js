import React, { Component } from 'react';

class MenuMobileone extends Component {
    render() {
        return (
            <ul className="header__sort-bar">
            <li className="header__sort-item">
                <a href="#" className="header__sort-link">Liên quan</a>
            </li>
            <li className="header__sort-item header__sort-item-active">
                <a href="#" className="header__sort-link">Mới nhất</a>
            </li>
            <li className="header__sort-item">
                <a href="#" className="header__sort-link">Bán chạy</a>
            </li>
            <li className="header__sort-item">
                <a href="#" className="header__sort-link">Giá</a>
            </li>
            </ul>
        );
    }
}

export default MenuMobileone;