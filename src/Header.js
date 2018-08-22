import React, { Component } from 'react';
import './Header.css';


class Header extends Component{
    render(){
        return(
            <div class="Header">
                <div class="headerLogo">
                    <a href="index.html">
                        <img title="返回首页"  src='logo.png' />
                    </a>
                    <a title="switch to English" href="indexEn.html" class="lang">中文/Eng</a>
                </div>
                {/* <div id="share">
                    <div class="bdsharebuttonbox" >
                        <a title="分享到微信" href="#" class="bds_weixin share1" id="wechat" ><img src="img/share1.png"></img></a>
                        <a title="分享到微博" href="http://service.weibo.com/share/share.php?url=http://medvisioncloud.com&appkey=&title=Description&pic=&ralateUid=&language=zh_cn#_loginLayer_1534360232084" target = "_blank" class="share2" ><img src="img/share2.png"></img></a>
                        <a title="分享到脸书" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//medvisioncloud.com" class="share3" ><img src="img/share3.png"></img></a>
                        <a title="分享到推特" target="_blank" href="https://twitter.com/home?status=http%3A//medvisioncloud.com" class="share4" ><img src="img/share4.png"></img></a>
                        <a title="分享到领英" target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//medvisioncloud.com&title=Medvision%20Cloud&summary=&source=" class="share5"> <img src="img/share5.png"></img></a>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Header;
