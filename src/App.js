import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import WeChat from './WeChat.js';
import About from './About';
import Feedback from './Feedback';
import NewsRegion from './NewsRegion';
import Disclaimer from './Disclaimer';
import Footer from './Footer';
import {headerInfo, shareData, bannerData, aboutData, newsData, disclaimerData, footerData, wechatData, contactData} from './data';

import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state ={
            showWechat: false,
        }
    }
    handleWechat = (e) =>{
        if(e.type === "mouseover"){
            this.setState({showWechat: true});
        }
        else{
            this.setState({showWechat: false});
        }
    }
  render() {
    return (
      <div>
          <Header headerInfo = {headerInfo} handleWechat = {this.handleWechat} shareData = {shareData}/>
          <Banner bannerData = {bannerData} />
          <WeChat wechatData = {wechatData} show = {this.state.showWechat}/>
          <About aboutData={aboutData}/>
          <NewsRegion newsData={newsData}/>
          <Disclaimer disclaimerData={disclaimerData}/>
          <Footer footerData = {footerData} />
          <Feedback contactData={contactData}/>
      </div>
    );
  }
}

export default App;
