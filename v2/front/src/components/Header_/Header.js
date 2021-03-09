import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavBar from './NavBar'
import logo from '../../assets/icons/logo.png'
import './Header.css'


class Header extends React.Component {
    constructor() {
        super();
        this.state = { "lang" : null };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {        
        this.setState({ [event.target.name] : event.target.value });
        this.props._setLang(event.target.value);
    }

    componentDidMount() {
        this.setState({lang: this.props._lang});
    }

    render() {
        var lang = this.state.lang;

        return (
            <header>                        
                <div id="logoWrapper">
                    <Link to="/home">
                        <img className="logo" src={logo} alt="Logo icon"></img>
                    </Link>
                </div>
    
                <NavBar _lang={this.props._lang}/>
    
                <div id="selectWrapper">
                    <select                                         
                        name="lang" 
                        onChange={this.handleChange}
                        defaultValue={lang}>
                        {lang==="ENG" ? <option disabled>Language</option>
                        : <option disabled>Język</option> 
                        }                    
                        <option value="PL">PL</option>
                        <option value="ENG">ENG</option>
                    </select>
                </div>
            </header>
        )        
    }
}

const HeaderRouter = withRouter(Header)
export default HeaderRouter