import React, { Component } from 'react';
import NavBar from './general/NavBar';

class Contact extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="bg-white mt-3 mx-4 py-4">
                    <div className="flex container">
                        <h3 className="mb-4">CONTACTANOS</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;