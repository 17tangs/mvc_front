import React, { Component } from 'react';
import './Disclaimer.css';


class Disclaimer extends Component{
    generateInfo = () =>{
        let s = []
        this.props.disclaimerData.info.forEach((p,i) =>{
            s.push(<p key={i}>{p}</p>);
        })
        return s;
    }
    render(){
        return(
            <div className="claim" style={{background:`url(${this.props.disclaimerData.img}) no-repeat`, backgroundSize:"100% auto"}}>
                <div className="claimInfo">
                    <h1>{this.props.disclaimerData.title}</h1>
                    {this.generateInfo()}
                </div>
            </div>
        )
    }
}

export default Disclaimer;
