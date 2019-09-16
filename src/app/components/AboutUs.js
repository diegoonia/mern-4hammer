import React, { Component } from 'react';
import NavBar from './general/NavBar';

class AboutUs extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1>Nosotros</h1>
            </div>
        )
    }
}

export default AboutUs;