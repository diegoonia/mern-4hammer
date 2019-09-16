import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/* TOP NAVBAR */}
                <nav className="navbar bg-white">
                    <span className="mb-0">
                        <text className="ml-3 mr-2 primary-color small">011 1122-3344</text>
                        <text className="primary-color">|</text>
                        <a className="ml-2 sec-color small" href="#">info@4hammer.com</a>
                    </span>
                    <span className="mb-0">
                        <a className="mr-2 primary-color small" href="#">Iniciar Sesión</a>
                        <text className="primary-color">|</text>
                        <a className="ml-2 mr-3 primary-color small" href="#">Crear Cuenta</a>
                    </span>
                </nav>

                <hr className="bg-white my-0" />

                {/* BOTTOM NAVBAR */}
                <nav className="navbar sticky-top navbar-expand-md bg-white navbar-light py-2">
                    <Link to='/'>
                        <img className="ml-5" src="../images/4hammer_logo.PNG" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto flex mr-3 ml-3">
                            <li className="nav-item dropdown ml-2 mr-2">
                                <Link to='/productos'>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PRODUCTOS</a>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Mesas</a>
                                    <a className="dropdown-item" href="#">Barras</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Banquetas</a>
                                </div>
                            </li>
                            <Link to='/nosotros'>
                                <li className="nav-item ml-2 mr-2">
                                    <a className="nav-link" href="#">NOSOTROS <span className="sr-only">(current)</span></a>
                                </li>
                            </Link>
                            <Link to='/contactanos'>
                                <li className="nav-item ml-2 mr-2">
                                    <a className="nav-link" href="#">CONTACTANOS</a>
                                </li>
                            </Link>
                        </ul>

                        <form className="form-inline my-2 mr-2 py-2">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Buscar" />
                            </div>
                        </form>

                        <div className="mr-5 pr-3 pl-1 ml-2">
                            <i className="fas fa-shopping-cart fa-lg primary-color"></i>
                            <div className="shopping-cart-text">$ 0,00</div>
                        </div>

                    </div>
                </nav>
            </div>
        )
    } //https://codepen.io/gungorbudak/pen/ooKNpz
}

export default NavBar;