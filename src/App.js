import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import WeChat from './WeChat.js';
import About from './About';
import Feedback from './Feedback';
import NewsRegion from './NewsRegion';
import Disclaimer from './Disclaimer';
import Footer from './Footer';
import {ch, en} from './data';

import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state ={
            lang: ch,
            showWechat: false,
        }
    }
    handleLang = (e) =>{
        if(this.state.lang === en){
            this.setState({
                lang: ch,
            })
        }
        else{
            this.setState({
                lang: en,
            })
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
          <Header headerInfo = {this.state.lang.headerInfo} handleLang = {this.handleLang} handleWechat = {this.handleWechat} shareData = {this.state.lang.shareData}/>
          <Banner bannerData = {this.state.lang.bannerData} />
          <WeChat wechatData = {this.state.lang.wechatData} show = {this.state.showWechat}/>
          <About aboutData={this.state.lang.aboutData}/>
          <NewsRegion newsData={this.state.lang.newsData}/>
          <Disclaimer disclaimerData={this.state.lang.disclaimerData}/>
          <Footer footerData = {this.state.lang.footerData} />
          <Feedback contactData={this.state.lang.contactData}/>
      </div>
    );
  }
}

export default App;
