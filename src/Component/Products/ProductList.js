import React from 'react'

function ProductList({name, image, price, discountPrice, onBuyProduct, product}) {
    
    return (
        <div className="col-md-4 col-6 sk-main__custom-pad-l">
          <div className="sk-main__product text-center color-light-white-bg">
            <figure className="sk-main__product-img">
              <img src={image} className="img-fluid" alt="Product-1"/>
            </figure>

            <div className="sk-main__product-details">
                <h4 className="color-black sk-main__product-title">{unescape(name)}</h4>
                {discountPrice ? <p className="p-small color-gray sk-main__product-from">from <del className="color-black">${price}</del> ${discountPrice}</p> : <p className="p-small color-gray sk-main__product-from">from ${price}</p>}
            </div>

            <div className="sk-main__product-btn">
              <button onClick={()=>onBuyProduct(product)} className="button button-primary buy-now" data-toggle="modal" data-target="#single-product-popup">buy now</button>
            </div>
          </div>
        </div>
    )
}

export default ProductList
