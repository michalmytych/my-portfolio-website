import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles & assets
import './BackButton.css';


const BackButton = (props) => {
    if (props.location.pathname !== "/home") {
        return (
            <button 
                className="back-btn"
                onClick={() => (props.history.goBack())}>
                    Wróć
            </button>
        )
    } else {
        return null
    }
}

export default withRouter(BackButton);