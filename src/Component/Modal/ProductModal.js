import React, { Component } from 'react'

class ProductModal extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    getAttributes = (obj) => {
        return Object.values(obj);
    }

    getVariations = (obj) => {
        return Object.entries(obj);
    }

    getVariationName = (name) => {
        if(name === 'Caffeine free or Charged (caffeine)') {
            return 'formula'
        }else if(name === 'Number of servings') {
            return 'serving_size'
        }else {
            return name.replace(" ", "_").toLowerCase()
        }
    }
    
    render() {
        const {product} = this.props;
    
        return (
            <div className="modal fade" id="single-product-popup" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered quick-buy" role="document">
                    <div className="modal-content quick-buy__modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>
                        <div className="modal-body quick-buy__modal-body">
                            {product !== undefined ? 
                            <section className="sk-product__banner-hide-now">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 col-12 sk-product__img">
                                            <figure className="sk-product__banner-left">
                                                <div className="quick-buy__main-img">
                                                    <img src={product.post_thumb_url} alt="" className="img-fluid quick-buy__thum-img" />
                                                    <h3 className="sk-product__title color-black">{product.post_title}</h3>
                                                    <div className="color-gray sk-product__short-details quick-buy__short-details">
                                                        <p dangerouslySetInnerHTML={{ __html: product.mvproduct_banner_description }}></p>
                                                        <p className="sk-product__savings quick-buy__savings">📦 20 servings (packets)</p>
                                                        <a href="#" className="link link-hover button-link quick-buy__view-details">View DETAILS &nbsp; <i className="fas fa-long-arrow-alt-right"></i></a>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="col-md-6 col-12 sk-product__select">
                                            <figure className="sk-product__banner-right quick-buy__right-contetn">
                                                <div className="sk-product__form quick-buy__form">
                                                    {
                                                        product.mvp_attributes !== undefined ? 
                                                        this.getAttributes(product.mvp_attributes).map((attr, key)=>(
                                                            <figure key={key} className="sk-product__form-item">
                                                            <figcaption className="sk-product__select-title">
                                                                <p className="p-small color-black font-bold">{attr.mvproduct_attribute_title === 'Caffeine free or Charged (caffeine)' ? 'Formula' : attr.mvproduct_attribute_title === 'Number of servings' ? 'Serving Size' : attr.mvproduct_attribute_title}</p>
                                                            </figcaption>
                                                                {
                                                                    this.getVariations(attr.attribute_items.items).map((item, key)=>(
                                                                        <label key={key} className="custom-radio sk-product__user-select  sk-product__select-formula form-control p-small color-black">{item[1].mvproduct_attribute_item}
                                                                            <input type="radio" name={this.getVariationName(attr.mvproduct_attribute_title)} value={item[0]}/>
                                                                            <span className="checkmark"></span>
                                                                        </label>
                                                                    ))
                                                                }
                                                        </figure>
                                                       )) : ''
                                                    }
                                                   
                            
                                                    <figure className="sk-product__form-item">
                                                        <figcaption className="sk-product__select-title">
                                                            <p className="p-small color-black font-bold">Delivery</p>
                                                        </figcaption>
                            
                                                        <label className="custom-radio sk-product__user-select  sk-product__select-formula form-control p-small color-black">
                                                            <span className="d-flex justify-content-between align-items-center">
                                                            <span>One-time only</span>
                                                            <span>$130</span>
                                                            </span>
                                                            <input type="radio" name="delivery" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                    
                                                        <label className="custom-radio sk-product__user-select sk-product__select-formula form-control p-small color-black every-month">
                                                            <span className="d-flex justify-content-between align-items-center">
                                                            <span>Every month (SmartShip) 
                                                                <span className="d-block color-green disclaimer-bold">
                                                                Save $28.60 starting next month
                                                                </span>
                                                            </span>
                                                            <span className="font-bold">$101.40</span>
                                                            </span>
                                                            <input type="radio" name="delivery" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </figure>
                                                    <p className="disclaimer-reg color-gray sk-product__earn-offer">You are eligible to earn FREE product. <a href="#" className="color-gray">Learn more</a></p>
                                
                                                    <figure className="sk-product__user-amount quick-buy__user-amount d-flex justify-content-between align-items-center">
                                                        <div className="sk-product__amount-modify d-flex justify-content-between align-items-center">
                                                            <button className="pack-qty-btn"><i className="fas fa-minus"></i></button>
                                                            <p className="text-center qty-width p-small font-bold">1</p>
                                                            <button className="pack-qty-btn"><i className="fas fa-plus"></i></button>
                                                        </div>
                                                        <div className="sk-product__amount-cost">
                                                            <h4 className="color-green"><del className="color-black font-reg">$130.00</del> $101.40</h4>
                                                        </div>
                                                    </figure>
                                                    <button className="button button-large button-primary full-width add-to-cart-icon">ADD TO CART</button>
                            
                                                </div>
                                                        
                                            </figure>
                                        </div>
                                    </div> 
                                </div>
                            </section> : ''}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductModal
