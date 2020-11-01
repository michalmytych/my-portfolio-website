// React
import React, { Component, Fragment } from 'react'

// React-Router
import { withRouter } from 'react-router-dom';

// Static & Assets
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
                {this.state.warning ?
                <div className="dim-block">
                    <div className="alert-block animate__animated animate__fadeIn">
                        <div>
                            {this.state.success ?
                            <h3>Wysłano</h3>
                            :
                            <h3>Niewłaściwa wiadomość</h3>
                            }
                        </div>
                            {this.state.success ?
                            <p className="alert_text">Dziękuję, postaram się odpowiedzieć Ci jak najszybciej.</p>
                            :
                            <p className="alert_text">
                                Żeby wysłać wiadomość, musisz wypełnić wszystkie pola
                                formularza.
                            </p>
                            }

                            <button className="hide-alert-btn" onClick={this.handleAlertHide}>
                                OK
                            </button>
                        </div>
                    </div>
                :
                null}

                <section className="contact-sect animate__animated animate__fadeIn">                

                    <button 
                    className="back-btn"
                    onClick={() => (this.props.history.push("/"))}>
                        Wróć
                    </button>

                    <h1 className="contact-header">Kontakt</h1>

                    <div className="gradient-line animate__animated animate__fadeIn"></div>

                    <p className="contact-sect-text">
                        Przy użyciu tego formularza możesz wysłać mi wiadomość
                        - podaj proszę swój e-mail, bym mógł na nią odpowiedzieć.
                        Postaram się to zrobić najszybciej jak to będzie możliwe. 
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
        window.emailjs.send(
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