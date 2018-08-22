import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About'
import News from './News';
import Disclaimer from './Disclaimer';
import Footer from './Footer';
import {headerInfo, shareData} from './data';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header headerInfo = {headerInfo} shareData = {shareData}/>
          <Banner />
          <About />
          <News />
          <Disclaimer />
          <Footer />
      </div>
    );
  }
}

export default App;
