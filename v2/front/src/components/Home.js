import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Home() {
    return (
        <div className="Home">
            <h1>Tata jest gupi</h1>
            <h3>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking at its layout. </h3>
                <Link to={'/portfolio'}>
                    <div className="show-works-link">Zobacz moje prace</div>
                </Link>
        </div>
    )
}

const HomeRouter = withRouter(Home)
export default HomeRouter