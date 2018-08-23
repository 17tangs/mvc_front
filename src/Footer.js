import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component{
    render(){
        return(
            <div className="foot">
                <div className="footline">
                    <span className="banquan">{this.props.footerData.copyright}</span>
                    <span id="feedbackButton" className="message">{this.props.footerData.feedback}</span>
                </div>
                <div className="footline2" style={{pointerEvents:'none'}}>
                    <span className="fonttext">{this.props.footerData.message}</span>
                </div>
            </div>
        )
    }
}

export default Footer;
