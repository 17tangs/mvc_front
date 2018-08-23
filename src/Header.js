import React, { Component } from 'react';
import Share from './Share'
import './Header.css';


class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="headerLogo">
                    <a href="index.html">
                        <img alt="Logo" title={this.props.headerInfo.logoTitle} src={this.props.headerInfo.logo} />
                    </a>
                    <a title={this.props.headerInfo.langSelectTitle} href="index.html" className="lang">{this.props.headerInfo.langSelectContent}</a>
                </div>
                <Share handleWechat = {this.props.handleWechat} shareData={this.props.shareData} />
            </div>
        )
    }
}

export default Header;
