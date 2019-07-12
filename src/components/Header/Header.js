import React from 'react';
import './Header.css';
import Logo from './logo.png'

class Header extends React.Component {
    render() {
        return (
            <div className="OuterBorder">
                <div className="logo">
                <img alt="logo" src={Logo} />
                </div>

            </div>
        )
    }
}

export default Header;