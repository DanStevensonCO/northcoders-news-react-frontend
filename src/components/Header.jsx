import React from 'react';
import { Link } from '@reach/router'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <h1>Northcoders News</h1>
            </Link>
        </header>
    );
};

export default Header;