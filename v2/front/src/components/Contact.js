import React from 'react'
import { StructuredText } from "react-datocms"
import { loader } from '../common'


export default function Contact(props) {
    return (
        <section>
            {props._content ? 
            <StructuredText data={props._content} />                    
            : loader}
        </section>
    )
}
