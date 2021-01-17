import React from 'react'

function SliderList(props) {
    const {product, onBuyProduct} = props
    return (
        <div className="sk-main__banner sk-hpage-header-bg">
            <div className="row">
                <div className="col-md-6 sk-main__custom-col-m">
                    <div className="sk-main__left">
                        <h1 className="color-white sk-main__subtitle-m">Best in className products for better <span className="color-brand">energy</span>|</h1>
                        <div className="sk-main__how-it-work">
                            <span className="btn btn-brand-primary btn-large btn-icon btn-watch btn-watch-videopop wistia_embed wistia_async_cydliwz2wn popover=true popoverContent=link">
                                <a className="a-link link-hover"><i className="far fa-play-circle play-icon"></i>How it works</a>
                            </span>
                        </div>
                        <div className="sk-main__banner-btn">
                            <button className="button button-primary buy-now-lg sk-main__banner-custom-btn" onClick={()=>onBuyProduct(product)} data-toggle="modal" data-target="#single-product-popup">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 sk-main__custom-col-m">
                    <div className="sk-main__right text-center">
                        <img src={product.post_thumb_url} alt="Banner img" className="img-fluid sk-main__banner-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderList
