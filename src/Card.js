import React, {Component} from 'react';
import './Card.css';


class Card extends Component{
    render(){
        let m = "";
        if(this.props.pos === 'r'){
            m = "0px 0px 30px 0px";
        }
        else{
            m = "0px 30px 0px 0px";
        }
        return(
            <a className = "card" target = "_blank"  style={{textDecoration:'none', margin:`${m}`}} href={this.props.cardData.link}>
                    <div className="headerImg" style={{background:`url(${this.props.cardData.img})`, backgroundPosition:"center", backgroundSize:"auto 100%"}}></div>
                    <div className="content">
                        <h2>{this.props.cardData.content}</h2>
                    </div>
            </a>
        );
    }
}
export default Card;
