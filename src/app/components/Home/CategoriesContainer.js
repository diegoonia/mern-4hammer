import React, { Component } from 'react';

class CategoriesContainer extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        this.fetchCategories()
    }

    fetchCategories() {
        fetch('api/categories')
            .then(res => res.json())
            .then(data => {
                this.setState({ categories: data });
                console.log(this.state.categories);
            })
    }

    render() {
        return (
            <div>
                {this.state.categories.map(c => (
                    <button className="btn btn-warning text-white ml-3">{c.title.toUpperCase()}</button>
                ))}                
            </div>
        )
    }
}

export default CategoriesContainer;