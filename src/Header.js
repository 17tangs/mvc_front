import React, { Component } from 'react';
import Share from './Share'
import './Header.css';


class Header extends Component{
    render(){
        return(
            <div class="Header">
                <div class="headerLogo">
                    <a href="index.html">
                        <img title={this.props.headerInfo.logoTitle} src={this.props.headerInfo.logo} />
                    </a>
                    <a title={this.props.headerInfo.langSelectTitle} href="index.html" class="lang">{this.props.headerInfo.langSelectContent}</a>
                </div>
                <Share shareData={this.props.shareData} />
            </div>
        )
    }
}

export default Header;
