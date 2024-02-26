import React from 'react'
import logo from '../assets/investment-calculator-logo.png'

export function Header(props) {
    

    return (
        <header id='header'>
            <h1>React Investment Calculator</h1>
            <img src={logo} alt='bag with money'/>
        </header>
    )
}
