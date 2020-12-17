import React from 'react'


export default function Alert(props) {
    return (
        <div className="dim-block">
            <div className="alert-block animate__animated animate__fadeIn">
                <div>
                    {props.success ?
                    <h3>Wysłano</h3>
                    :
                    <h3>Niewłaściwa wiadomość</h3>
                    }
                </div>
                {props.success ?
                <p className="alert_text">Dziękuję, postaram się odpowiedzieć Ci jak najszybciej.</p>
                :
                <p className="alert_text">
                    Żeby wysłać wiadomość, musisz wypełnić wszystkie pola
                    formularza.
                </p>
                }

                <button className="hide-alert-btn" onClick={props.handleAlertHide}>
                    OK
                </button>
            </div>
        </div>
    )
}
