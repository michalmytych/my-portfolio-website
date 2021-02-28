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
                        LOGO
                    </Link>
                </div>
    
                <NavBar _lang={this.props._lang}/>
    
                <select                     
                    name="lang" 
                    onChange={this.handleChange}
                    defaultValue={lang}>
                    <option value="PL">PL</option>
                    <option value="ENG">ENG</option>
                </select>
            </header>
        )        
    }
}

const HeaderRouter = withRouter(Header)
export default HeaderRouter