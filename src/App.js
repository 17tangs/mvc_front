import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About'
import NewsRegion from './NewsRegion';
import Disclaimer from './Disclaimer';
import Footer from './Footer';
import {headerInfo, shareData, bannerData, aboutData, newsData} from './data';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header headerInfo = {headerInfo} shareData = {shareData}/>
          <Banner bannerData = {bannerData} />
          <div className = "regionFull">
              <About aboutData={aboutData}/>
          </div>
          <NewsRegion newsData={newsData}/>
          <Disclaimer />
          <Footer />
      </div>
    );
  }
}

export default App;
