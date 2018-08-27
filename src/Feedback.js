import React, {Component} from 'react';
import './Feedback.css';

class Feedback extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
    }
    render(){
        let s = "none";
        if(this.props.show){
            s = "block";
        }
        let d = this.props.contactData;
        return(
             <div className="feedback" style = {{display:`${s}`}}>
                <div className="container">
                    <div className="feedbackHeader">
                        <h3>{d.title}</h3>
                    </div>
                    <div className="contactContainer">
                        <form id="contact" onSubmit={this.handleSubmit}>
                            <div className="name">
                                <fieldset className="first">
                                    <input placeholder={d.name1} id="name1" type="text" tabIndex="1" required maxLength="20"/>
                                </fieldset>
                                <fieldset className="last">
                                    <input placeholder={d.name2} id="name2" type="text" tabIndex="2" required maxLength="20"/>
                                </fieldset>
                            </div>
                            <fieldset>
                                <input placeholder={d.email} id="email" type="email" tabIndex="3" required maxLength="30"/>
                            </fieldset>
                            <fieldset>
                                <input placeholder={d.phone} id="phone" type="tel" tabIndex="4" maxLength="15"/>
                            </fieldset>
                            <fieldset>
                                <input placeholder={d.subject} id="title" type="text" tabIndex="5" required maxLength="40"/>
                            </fieldset>
                            <fieldset>
                                <textarea placeholder={d.content} id="content" tabIndex="6" required maxLength="500"></textarea>
                            </fieldset>
                            <div className="buttons">
                                <p id="messageSent" style={{padding:'10px', display:'none'}}><b>提交成功!</b></p>
                                <div name="cancelButton" id="contact-cancel">取消</div>
                                <button id="contact-submit">提交</button>
                            </div>
                        </form>
                   </div>
               </div>
         </div>
        );
    }
}

export default Feedback;
