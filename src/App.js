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
            showFeedback: false,
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
    handleFeedback = () => {
        if(!this.state.showFeedback){
            this.setState({showFeedback: true});
        }
        else{
            this.setState({showFeedback: false});
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
          <Header headerInfo = {this.state.lang.headerInfo} handleFeedback = {this.handleFeedback} handleLang = {this.handleLang} handleWechat = {this.handleWechat} shareData = {this.state.lang.shareData}/>
          <Banner bannerData = {this.state.lang.bannerData} />
          <WeChat wechatData = {this.state.lang.wechatData} show = {this.state.showWechat}/>
          <About aboutData={this.state.lang.aboutData}/>
          <NewsRegion newsData={this.state.lang.newsData}/>
          <Disclaimer disclaimerData={this.state.lang.disclaimerData}/>
          <Footer footerData = {this.state.lang.footerData} />
          <Feedback contactData={this.state.lang.contactData} handleClick = {this.handleFeedback} show = {this.state.showFeedback}/>
      </div>
    );
  }
}

export default App;
