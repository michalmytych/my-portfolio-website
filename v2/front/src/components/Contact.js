import React from 'react'
import ReactMarkdown from 'react-markdown'
import { loader } from '../common'


export default function Contact(props) {
    return (
        <section>
            <ReactMarkdown>
                { props._content ? props._content : loader }
            </ReactMarkdown>
        </section>
    )
}
