import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src="https://image.flaticon.com/icons/png/512/2331/2331970.png" alt="logo" />
                <div className='border'></div>
                <p>Quick Shop</p>
            </div>
            <div className='nav-icon'>
                <img src="https://image.flaticon.com/icons/png/512/126/126142.png" alt="cart" />
            </div>

        </div>
    )
}

export  default Header
