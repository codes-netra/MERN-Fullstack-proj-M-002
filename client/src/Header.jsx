import React from 'react';
import { Link } from 'react-router';
import './Header.css';
import DisplayItem  from './DisplayItem';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">ProductSales</div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Services</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;