import React, { Component } from 'react';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Router>
                <div className="bg-light">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/nosotros" component={AboutUs} />
                        <Route exact path="/contactanos" component={Contact} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;