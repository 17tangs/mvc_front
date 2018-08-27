import React, {Component} from 'react';
import './Share.css';

class Share extends Component{
    generateShares = () =>{
        let s = []
        this.props.shareData.data.forEach((share,i) => {
            if(share.name === "wechat"){
                s.push(<a onMouseOver = {this.props.handleWechat} onMouseOut = {this.props.handleWechat} key = {i} title={share.title} id={share.name} target={share.name !== "wechat" ? "_blank" : ""}  href={share.link} style={{backgroundColor:share.color}}>
                    <img alt="share" sytle={{width:'100%', height:'100%'}} src={share.img}/>
                </a>)
            }
            else if(share.name === "feedback"){
                s.push(<a onClick={this.props.handleFeedback} key = {i} title={share.title} id={share.name} style={{backgroundColor:share.color}}>
                    <img alt="share" sytle={{width:'100%', height:'100%'}} src={share.img}/>
                </a>)
            }
            else if(this.props.shareData.names.includes(share.name)){
                s.push(<a key = {i} title={share.title} id={share.name} target={share.name !== "wechat" ? "_blank" : ""}  href={share.link} style={{backgroundColor:share.color}}>
                    <img alt="share" sytle={{width:'100%', height:'100%'}} src={share.img}/>
                </a>)
            }
        })
        return s;
    }
    render(){
        return(
            <div id="share" >
                {this.generateShares()}
                    {/* <a title="分享到微信" href="#" class="bds_weixin share1" id="wechat" ><img src="img/share1.png"></img></a> */}
            </div>
        );
    }
}


export default Share;
