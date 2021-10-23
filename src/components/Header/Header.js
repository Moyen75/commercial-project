import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/addProduct'>Add Products</Link>
            <Link to='/manage'>Manage Products</Link>
            <Link to='/update'>Update Products</Link>
        </div>
    );
};

export default Header;