import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {

    constructor() {
        super();
        this.state = {
            _id: '',
            title: '',
            description: '',
            products: []
        };

        this.addProduct = this.addProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    deleteProduct(id) {
        if (confirm('Are you sure you want to delete it?'))
            fetch(`/api/products/${id}`, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({ html: 'Product Deleted' });
                    this.fetchProduct();
                });
    }

    editProduct(id) {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                })
            }
            );
    }

    addProduct(e) {

        if (this.state._id) {
            fetch(`/api/products/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({ html: 'Product updated' });
                    this.setState({ title: '', description: '', _id: '' });
                    this.fetchProducts();
                })
        } else {
            fetch('/api/products', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({ html: 'Product saved' })
                    this.setState({ title: '', description: '', _id: '' });
                    this.fetchProducts();
                })
                .catch(err => console.log(err));
        }
        e.preventDefault();
    }

    componentDidMount() {
        this.fetchProducts()
    }

    fetchProducts() {
        fetch('api/products')
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data });
                console.log(this.state.products);
            })
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div class="bg-light">
                {/* NAVIGATION */}
                <NavBar />

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://dummyimage.com/1400x400/3030c9/FFF.png" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://dummyimage.com/1400x400/3030c9/FFF.png" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://dummyimage.com/1400x400/3030c9/FFF.png" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div class="flex">
                    <h5 class="mt-5 mb-3">CATEGORÍAS PRINCIPALES</h5>
                </div>
                <div class="flex">
                    <button class="btn btn-warning text-white ml-3">MESAS</button>
                    <button class="btn btn-warning text-white ml-3">MUEBLES</button>
                    <button class="btn btn-warning text-white ml-3">BANQUETAS</button>
                    <button class="btn btn-warning text-white ml-3">BARRAS</button>
                </div>

                <div class="bg-white mt-3 py-4">
                    <div class="flex">
                        <h3 class="mb-3">DESTACADOS</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;