import React, { Component } from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'
import Products from './../Products/Products';
import ProductModal from '../Modal/ProductModal';

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            product: {}
        }
    }

    setSingleProductObj = (productData) => {
        this.setState({product:productData})
    }

    render() {
        return (
            <main className="sk-main">
                <ProductSlider featureProducts={this.props.featureProducts} onBuy={this.setSingleProductObj}/>
                <Products products={this.props.products} onBuy={this.setSingleProductObj} />
                <ProductModal product={this.state.product} />
            </main>
        )
    }
}

export default Home
