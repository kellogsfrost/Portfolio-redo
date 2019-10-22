import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/headshot.jpg'


class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1 className="sideBar"><strong>Hayden Schultz</strong></h1>
                    <h2 className="sideBar">Full-Stack Web Devloper</h2>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
