import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <img src={logo} alt='' />
                <h2 className='header-text'>Fitness Club</h2>
            </div>
        </nav>
    );
};

export default Header;