import React, { Component } from 'react';
import './About.css';


class About extends Component{
    render(){
        return(
          <div className = "regionFull">
            <div className="about" style = {{background:`url(${this.props.aboutData.bg})`, backgroundSize: `100% auto`, backgroundPosition:"center"}}>
                <div className="aboutInfo">
                    <h1>{this.props.aboutData.title}</h1>
                    <h2>{this.props.aboutData.subtitle}</h2>
                    <p>{this.props.aboutData.description1}</p>
                    <p>{this.props.aboutData.description2}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default About;
