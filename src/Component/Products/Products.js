import React from 'react'
import ProductList from './ProductList'
import ProductLoding from './ProductLoding';

var discountPrice = 0;
function Products(props) {

    const getProductPrice = (variation) => {
      let minValue = Number.MAX_SAFE_INTEGER;
      let variations = variation
      if (variations) {
        Object.values(variations).forEach((element) => {
          if (element.mvproduct_ordertype === 'ordertype_2') {
            return;
          } else {
            if (+element.mvproduct_price < minValue) {
              minValue = element.mvproduct_price;
              if(element.mvproduct_discounted_price) {
                discountPrice = element.mvproduct_discounted_price
              }else {
                discountPrice = 0;
              }
            }
          }
        });
      }
      return minValue;
    }

    const setProductData = (product) => {
      props.onBuy(product)
    }

    const productListHTML = props.products.map((product, index)=>(
      <ProductList
        onBuyProduct={setProductData} 
        key={product.ID}
        name={product.post_title}
        image={product.post_thumb_url}
        price={getProductPrice(product.mvp_variations)}
        discountPrice={discountPrice}
        product={product}
      ></ProductList>
    ))

    return (
        <section className="sk-main__products">
          <div className="container">
            <div className="row">
              {productListHTML.length ? productListHTML : <ProductLoding loading={6}/>}
            </div>
          </div>
        </section>
    )
}

export default Products
