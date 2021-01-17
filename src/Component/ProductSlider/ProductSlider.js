import React from 'react'
import Slider from "react-slick";
import SliderList from './SliderList';

function ProductSlider(props) {

    const {featureProducts, onBuy} = props
    var settings = {
        centerMode: true,
        dots: true,
        centerPadding: "0px",
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "20px",
            slidesToShow: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
            },
        },
        ],
      };

      const setProductData = (product) => {
        onBuy(product)
      }

    return (
        <section className="sk-main__top">
            <div className="container sk-main__slider-container">
            <div className="sk-main__title text-center">
                <h1 className="color-black">Official Store</h1>
                <h4 className="color-black sk-main__title-b">Brought to you by <a href="" className="color-brand link-hover" data-toggle="modal" data-target="#referrerCode">Whisper Underwood</a></h4>
            </div>
            {featureProducts.length ?
                <Slider {...settings} className="sk-main__banner-slider">
                {featureProducts.map(product=>(
                    <SliderList key={product.ID} product={product} onBuyProduct={setProductData}/>
                ))}    
            
                </Slider> : ''
            }
            </div>

        
        </section>
    )
}

export default ProductSlider
