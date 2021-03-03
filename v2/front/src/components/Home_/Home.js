import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Http Mike Dev</h1>
            <h3>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking at its layout. </h3>
                <Link to={'/portfolio'}>
                    <div>Zobacz moje prace</div>
                </Link>
        </div>
    )
}

const HomeRouter = withRouter(Home)
export default HomeRouter