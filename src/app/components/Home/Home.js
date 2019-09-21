import React, { Component } from 'react';
import NavBar from '../general/NavBar';
import Footer from '../general/Footer';
import CategoriesContainer from './CategoriesContainer';

class Home extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavBar />

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://dummyimage.com/1400x400/3030ff/FFF.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://dummyimage.com/1400x400/36ffc9/FFF.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://dummyimage.com/1400x400/ff30c9/FFF.png" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="flex">
                    <h5 className="mt-5 mb-3">CATEGORÍAS PRINCIPALES</h5>
                </div>
                <div className="flex">
                    <CategoriesContainer />
                </div>

                <div className="bg-white mt-3 py-4">
                    <div className="flex">
                        <h3 className="mb-3">DESTACADOS</h3>
                    </div>
                </div>

                <div className="flex bg-white py-2">
                    <div className="card text-center ml-2 mr-2 my-4" id="card">
                        <a href="#">
                        <img src="https://dummyimage.com/200x200/ff3000/FFF.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mesa 1</h5>
                            <p className="card-text">$15.000</p>
                        </div>
                        </a>
                    </div>
                    <div className="card text-center ml-2 mr-2 my-4" id="card">
                        <a href="#">
                        <img src="https://dummyimage.com/200x200/ff00ff/FFF.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mesa 2</h5>
                            <p className="card-text">$15.000</p>
                        </div>
                        </a>
                    </div>
                    <div className="card text-center ml-2 mr-2 my-4" id="card">
                        <a href="#">
                        <img src="https://dummyimage.com/200x200/aaffc9/FFF.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mesa 3</h5>
                            <p className="card-text">$15.000</p>
                        </div>
                        </a>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home;