import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavBar from './NavBar'


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
                <div>
                    <Link to="/portfolio">
                        <div className="logo"></div>
                    </Link>
                </div>
    
                <NavBar _lang={this.props._lang}/>
    
                <div className="lang-select-wrapper">
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