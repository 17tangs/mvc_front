import React, { Component } from 'react';
import Media from 'react-media';
import './Footer.css';


class Footer extends Component{
    render(){
        return(
            <Media query="(max-width: 872px)">
                {matches =>
                    matches ? (
                        <div className="foot">
                            <div className="footline">
                                <div className="banquan"><p>{this.props.footerData.copyright} </p><p>{this.props.footerData.message}</p></div>
                                <span id="feedbackButton" className="message">{this.props.footerData.feedback}</span>
                            </div>
                            <div className="footline2" style={{pointerEvents:'none'}}>
                            </div>
                        </div>
                    ) : (
                        <div className="foot">
                            <div className="footline">
                                <span className="banquan">{this.props.footerData.copyright}</span>
                                <span id="feedbackButton" className="message">{this.props.footerData.feedback}</span>
                            </div>
                            <div className="footline2" style={{pointerEvents:'none'}}>
                                <p>{this.props.footerData.message}</p>
                            </div>
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default Footer;
