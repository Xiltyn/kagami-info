import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {

    componentDidMount() {}
    componentWillUnmount() {}

    render() {
        return (
            <div>
        Hello Signup
                <h4>
                    <Link to="login">Login</Link>
                </h4>
            </div>
        );
    }

}

export default Signup;
