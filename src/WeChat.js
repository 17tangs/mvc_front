import React, {Component} from 'react';
import './WeChat.css';

class weChat extends Component {
    render(){
        let s = ''
        this.props.show === true ? s = 'block' : s = 'none';
        return(
            <div className="wechatShare" style = {{display:`${s}`}}>
                <div className="popup_head">
                    <span>{this.props.wechatData.title}</span>
                </div>
                <img style={{height:'215px', width:'215px'}} alt = "Wechat" src={this.props.wechatData.img}/>
                <div className="popup_foot">
                    {this.props.wechatData.description1}<br></br>
                    {this.props.wechatData.description2}
                </div>
            </div>
        );
    }
}

export default weChat;
