import React, { Component } from 'react';
import { Link } from '@reach/router'

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-message-block">
                <h2>404 - page not found</h2>
                <p>Check the link you are using or go to the <Link to="/">homepage</Link></p>
            </div>
        );
    }
}

export default ErrorPage;