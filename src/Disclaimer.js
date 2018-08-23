import React, { Component } from 'react';
import Media from 'react-media';
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
            <Media query="(max-width: 680px)">
                {matches =>
                    matches ? (
                        <div className="claim" style={{background:`url(${this.props.disclaimerData.img}) no-repeat`, backgroundAttachment: 'fixed', backgroundPosition: "bottom", backgroundSize:"auto 100%"}}>
                            <div className="claimInfo">
                                <h1>{this.props.disclaimerData.title}</h1>
                                {this.generateInfo()}
                            </div>
                        </div>
                    ) : (
                        <div className="claim" style={{background:`url(${this.props.disclaimerData.img}) no-repeat`, backgroundAttachment: 'fixed', backgroundPosition: "bottom", backgroundSize:"100% auto"}}>
                            <div className="claimInfo">
                                <h1>{this.props.disclaimerData.title}</h1>
                                {this.generateInfo()}
                            </div>
                        </div>
                    )
                }
            </Media>
        )
    }
}

export default Disclaimer;
