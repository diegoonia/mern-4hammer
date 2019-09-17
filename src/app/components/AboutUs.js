import React, { Component } from 'react';
import NavBar from './general/NavBar';

class AboutUs extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="bg-white mt-3 mx-4 py-4">
                    <div className="flex container">
                        <h3 className="mb-4">NOSOTROS</h3>
                        <div className="row">
                            <img className="col-6" src="https://dummyimage.com/600x400/ff30c9/FFF.png" alt="Nosotros" />
                            <div className="col-6">
                                <p className="mx-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quidem earum reiciendis deleniti ipsum eligendi pariatur possimus deserunt dolorum accusantium numquam nemo officia nam magnam quos odio enim non et!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;