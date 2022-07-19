import React, { Component } from 'react'
import logo from './white-full-small.png'

class App extends React.Component {

    render() {
        return (
            <div class="container">
                <img src={logo} alt="TechX" height={50}/>
                <div class="spacer"></div>
                <p class="message">We are not accepting dues at this time. Please check back on August 31st, 2022 at the latest.</p>
            </div>
        )
    }
}

export default App