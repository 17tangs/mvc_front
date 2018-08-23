import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About'
import NewsRegion from './NewsRegion';
import Disclaimer from './Disclaimer';
import Footer from './Footer';
import {headerInfo, shareData, bannerData, aboutData, newsData, disclaimerData, footerData} from './data';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header headerInfo = {headerInfo} shareData = {shareData}/>
          <Banner bannerData = {bannerData} />
          <About aboutData={aboutData}/>
          <NewsRegion newsData={newsData}/>
          <Disclaimer disclaimerData={disclaimerData}/>
          <Footer footerData = {footerData} />
      </div>
    );
  }
}

export default App;
