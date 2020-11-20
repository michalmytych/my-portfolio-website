// React
import React, { Component, Fragment } from 'react'

// React-Router
import { withRouter } from 'react-router-dom';

// EmailJS
import emailjs from 'emailjs-com';

// Components
import Alert from './Alert';

// Static & Assets
import ReactMarkdown from "react-markdown";
import './Contact.css';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            feedback: '',
            name: '',
            email: '',
            warning: false,
            success: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAlertHide = () => {
        this.setState({
            warning: false,
            success: false
        });
    }

    render() {
        return (
            <Fragment>
                {this.state.warning
                ?
                <Alert handleAlertHide={this.handleAlertHide} success={this.state.success} />   
                :
                null}

                <section className="contact-sect animate__animated animate__fadeIn">                
                    <h1 className="contact-header top-const-margin">Kontakt</h1>

                    <div className="gradient-line animate__animated animate__fadeIn"></div>

                    <p className="contact-sect-text">
                        {
                            this.props.content
                            ?
                            <ReactMarkdown source={this.props.content} />
                            :
                            <span style={{textAlign: 'center'}}>Brak treści.</span>
                        }
                    </p>
                    <form className="contact-form">
                        <div>
                            <input 
                                className="name-input"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Twoje imię"
                                required
                                value={this.state.name}
                                onChange={this.handleChange}>
                            </input>
                            <input
                                className="email-input"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Twój e-mail"
                                required
                                value={this.state.email}
                                onChange={this.handleChange}>
                            </input>
                            <input
                                className="subject-input"
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Temat wiadomości"
                                required
                                value={this.state.subject}
                                onChange={this.handleChange}>
                            </input>
                            <textarea
                                className="feedback-input-area"
                                id="feedback"
                                name="feedback"
                                onChange={this.handleChange}
                                placeholder="Napisz wiadomość..."
                                required
                                value={this.state.feedback}
                            />
                        </div>
                        <input 
                            className="submit-btn"
                            type="button" 
                            value="Wyślij" 
                            onClick={this.handleSubmit} />
                    </form>
                </section>
            </Fragment>    
        )
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const key = target.name;

        this.setState({
            [key]: value
        })
    }

    handleSubmit(event) {
        const templateId = 'template_klvng5h';

        if (!this.state.subject || !this.state.feedback || !this.state.email || !this.state.name) {
            this.setState({
                warning: true
            });
        }
        else{
            this.sendForm(
                templateId,
                {
                    subject: this.state.subject,
                    feedback: this.state.feedback,
                    name: this.state.name,
                    email: this.state.email,
                })
    
            this.setState({
                subject: "",
                feedback: "",
                name: "",
                email: ""
            })
        }
    }

    sendForm(templateId, variables) {
        emailjs.send(
            'service_mp63qqg', templateId,
            variables, 'user_HJgZoeBW9LgFmoV1EUhWP'
        ).then(res => {
            this.setState({
                success: true,
                warning: true
            });
        }).catch(err => console.error('Operation failed, error log:', err))
    }
}

export default withRouter(Contact);