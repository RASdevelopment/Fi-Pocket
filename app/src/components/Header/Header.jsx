import React, { Component } from 'react';
import './Header.css';
import imgLogoHor from '../../img/LogoHorizontal.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <img src={imgLogoHor} alt="Logo de FI Pocket"/>
                {/* <b class="UI-Icon1">O</b> */}
                <span style={{color:'gray', fontSize:'small'}}>V 2.5</span>
            </header>
        )
    };
}

export default Header;