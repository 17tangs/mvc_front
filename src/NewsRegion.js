import React, { Component } from 'react';
import Card from './Card';
import './NewsRegion.css';


class NewsRegion extends Component{
    render(){
        return(
            <div className="regionFull">
                <div className="regionSplitVL">
                    <div className="title" style={{background:`url(${require('./img/bg3.png')})`, backgroundPosition: 'right', backgroundSize:'auto 100%'}}>
                        <div id="companyNews">
                            <h1>MVC 最近新闻</h1>
                            <p style={{fontWeight:'500'}}>关于华建医视云的最新动态</p>
                        </div>
                    </div>
                </div>
                <div className="regionSplitVR">
                    <Card pos='l' cardData={{link: "http://huajiantech.com/new.html", img: require('./img/u16.jpg'), content: "Dr Lotus AI 首次亮相中国卫生信息技术与健康医疗大数据应用交流大会"}}/>
                    <Card pos='r' cardData={{link: "https://mp.weixin.qq.com/s/qQNyLgV46LgN0UGOeyyk8A", img: require('./img/u17.jpg'), content: "体检？超声+钼靶？磁共振？乳腺检查该怎么选……"}}/>
                {/* <div class="regionSplitVL">
                    <a id = "card1" target = "_blank"  style={{textDecoration:'none'}} href="http://huajiantech.com/new.html">
                        <div class="card">
                            <div class="headerImg" id="n1"></div>
                            <div class="content">
                                <h2>Dr Lotus AI 首次亮相中国卫生信息技术与健康医疗大数据应用交流大会</h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="regionSplitVR">
                    <a id = "card2" target = "_blank" style={{textDecoration:'none'}} href="https://mp.weixin.qq.com/s/qQNyLgV46LgN0UGOeyyk8A">
                        <div class="card" >
                            <div class="headerImg"id="n2"></div>
                            <div class="content" >
                                <h2>体检？超声+钼靶？磁共振？乳腺检查该怎么选……</h2>
                            </div>
                        </div>
                    </a>
                </div> */}
            </div>
        </div>
        )
    }
}

export default NewsRegion;
