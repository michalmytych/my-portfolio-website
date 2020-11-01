// React
import React, { Component } from 'react'

// React-Router
import { withRouter } from 'react-router-dom'

// Static & Assets
import './Skills.css';
import { 
    html_icon, 
    css_icon, 
    python_icon, 
    js_icon, 
    git_icon, 
    linux_icon, 
    docker_icon, 
    postgre_icon, 
    react_icon, 
    django_icon
} from './assets';



class Skills extends Component {
    state = {

        // SKILLS
        skills: [
            {
                name: "Python",
                icon: python_icon,
            },
            {
                name: "JavaScript",
                icon: js_icon,
            },
            {
                name: "React",
                icon: react_icon,
            },
            {
                name: "HTML 5",
                icon: html_icon,
            },
            {
                name: "CSS 3",
                icon: css_icon,
            },
            {
                name: "Django",
                icon: django_icon,
            },
            {
                name: "Git",
                icon: git_icon,
            },
            {
                name: "Ubuntu Linux",
                icon: linux_icon,
            },
            {
                name: "Docker",
                icon: docker_icon,
            },
            {
                name: "PostgreSQL",
                icon: postgre_icon,
            }
        ]

    };

    render() {
        return (
            <section className="skills-sect animate__animated animate__fadeIn">
                <button 
                className="back-btn"
                onClick={() => (this.props.history.push("/"))}>
                    Wróć
                </button>

                <h1>Moje umiejętności</h1>

                <div className="gradient-line animate__animated animate__fadeIn"></div>
                <p id="skills_container">
                    Tworzę aplikacje webowe przy użyciu nowoczesnych technologii
                    takich jak Django oraz React. Umiem budować REST-owe api w oparciu
                    o ogólnie przyjęte standardy. Tworząc interfejsy użytkownika, podążam za zasadami
                    Responsive Web Design. Znam język SQL, potrafię też pracować z aplikacjami
                    opartymi o ORM. Oto przykłady technologii które umiem wykorzystywać:
                </p>
                <ul className="skills-list">
                    {this.state.skills.map(item => (
                            <li 
                                className="skills-list-elem"
                                key={item.id}>
                                <img
                                    className="skill-icon"
                                    src={item.icon} 
                                    alt="Ikona technologii.">
                                </img>
                                <h4 className="skill-label">{item.name}</h4>
                            </li>
                    ))}
                </ ul>
            </section>
        )
    }
}

export default withRouter(Skills);
