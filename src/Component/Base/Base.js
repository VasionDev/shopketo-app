import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import axios from 'axios'
import Sidebar from "react-sidebar";
import CountrySidebar from '../Sidebar/CountrySidebar';
import CartSidebar from '../Sidebar/CartSidebar';

class Base extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products : [],
            sidebarOpen: false,
            sidebarName: '',
            featureProducts: []
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    onSetSidebarName = (name) => {
        let ComponentName
        if(name == 'country') {
            ComponentName = <CountrySidebar closeSidebar={this.onSetSidebarOpen}/>
        }else if(name == 'cart') {
            ComponentName = <CartSidebar closeSidebar={this.onSetSidebarOpen}/>
        }
        this.setState({ sidebarName: ComponentName, sidebarOpen: true });
    }
    
    componentDidMount() {
        axios.get('https://demo.shopketo.com/wp-json/wp/pruvitnow/products/')
        .then(res=>{
            this.setState({products: res.data.en.list})
            this.getFeatureProducts()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getFeatureProducts = () => {
        let featureProductsArray = [];
        this.state.products.forEach(product => {
            let currentTime = new Date()
            let startTime = new Date(product.mvp_slider_start_date + ' ' + product.mvp_slider_start_time)
            let endTime = new Date(product.mvp_slider_end_date + ' ' + product.mvp_slider_end_time)
            if(currentTime >= startTime && currentTime <= endTime) {
                featureProductsArray.push(product)
            }
        });
        this.setState({featureProducts: featureProductsArray})
    }

    render() {
        return (
            <>  
                <Sidebar
                    sidebar={this.state.sidebarName}
                    pullRight={true}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white" } }}>
                    <Header onClickSidebar={this.onSetSidebarName} />
                    <Home products={this.state.products} featureProducts={this.state.featureProducts} />
                    <Footer/>
                </Sidebar>
            </>
        )
    }
}

export default Base
