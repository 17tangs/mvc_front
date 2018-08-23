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
                            <h1>{this.props.newsData.title}</h1>
                            <p style={{fontWeight:'500'}}>{this.props.newsData.subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="regionSplitVR">
                    <Card pos='l' cardData={this.props.newsData.cardData[0]}/>
                    <Card pos='r' cardData={this.props.newsData.cardData[1]}/>
            </div>
        </div>
        )
    }
}

export default NewsRegion;
