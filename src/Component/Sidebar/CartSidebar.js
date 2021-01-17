import React from 'react'

function CartSidebar(props) {
    return (
        <div className="sk-cart color-white-bg">
            <figure className="sk-cart__header d-flex justify-content-between">
                <h4 className="color-black sk-cart__header-title">Your cart</h4>
                <a onClick={()=> props.closeSidebar(false)} className="sk-cart__close-btn pointer">
                    <img src="/assets/images/cross-sign.png" alt="Cross sign" className="img-fluid sk-cart__cross-sign" />
                </a>
            </figure>

            <figure>
                <div className="sk-cart__subtitle sk-cart__padd">
                    <h5 className="sk-cart__subtitle--text color-gray">TODAY’S ORDER  🛒</h5>
                </div>

                <figure className="sk-cart__item-box sk-cart__padd position-relative">
                    <button className="sk-cart__item-close-btn position-absolute">
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                    <div className="sk-cart__item-content d-flex">
                        <div className="sk-cart__item-img">
                            <img src="/assets/images/cart-item-img.png" alt="cart-item-img" className="img-fluid cart-item-img" />
                        </div>
                        <div className="sk-cart__item-details flex-fill">
                            <p className="p-small font-bold color-black sk-cart__item-title">KETO//OS NAT Maui  Punch</p>
                            <p className="disclaimer-reg color-gray">20 Servings <br/> Charged (Caffeine)</p>
                            <div className="sk-cart__item-modify d-flex justify-content-between">
                                <div className="sk-cart__select-number d-flex align-items-center justify-content-between">
                                    <button className="sk-cart__plus-minus color-white color-brand-bg"><i className="fas fa-minus"></i></button>
                                    <p className="p-small font-bold color-black">1</p>
                                    <button className="sk-cart__plus-minus color-white plus-icon color-brand-bg"><i className="fas fa-plus"></i></button>
                                </div>
                                <h4 className="color-black">$300</h4>
                            </div>
                        </div>
                    </div>
                </figure>
            </figure>

            <figure>
                <div className="sk-cart__subtitle sk-cart__padd">
                    <h5 className="sk-cart__subtitle--text color-gray">Smartship (starts in 30 days)  🚀</h5>
                </div>

                <figure className="sk-cart__item-box sk-cart__padd position-relative">
                    <button className="sk-cart__item-close-btn position-absolute">
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                    <div className="sk-cart__item-content d-flex">
                        <div className="sk-cart__item-img">
                            <img src="/assets/images/cart-item-img.png" alt="cart-item-img" className="img-fluid cart-item-img"/>
                        </div>

                        <div className="sk-cart__item-details flex-fill">
                            <p className="p-small font-bold color-black sk-cart__item-title">KETO//OS NAT Maui  Punch</p>
                            <p className="disclaimer-reg color-gray">20 Servings <br/> Charged (Caffeine)</p>

                            <div className="sk-cart__item-modify d-flex justify-content-between">
                            <div className="sk-cart__select-number d-flex align-items-center justify-content-between">
                                <button className="sk-cart__plus-minus color-white color-brand-bg"><i className="fas fa-minus"></i></button>
                                    <p className="p-small font-bold color-black">1</p>
                                <button className="sk-cart__plus-minus color-white plus-icon color-brand-bg"><i className="fas fa-plus"></i></button>
                            </div>
                                <h4 className="color-black">$300</h4>
                            </div>
                        </div>
                    </div>
                </figure>

                <figure className="sk-cart__item-box sk-cart__padd position-relative">
                    <button className="sk-cart__item-close-btn position-absolute">
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                    <div className="sk-cart__item-content d-flex">
                        <div className="sk-cart__item-img">
                            <img src="/assets/images/cart-item-img.png" alt="cart-item-img" className="img-fluid cart-item-img"/>
                        </div>

                        <div className="sk-cart__item-details flex-fill">
                            <p className="p-small font-bold color-black sk-cart__item-title">KETO//OS NAT Maui  Punch</p>
                            <p className="disclaimer-reg color-gray">20 Servings <br/> Charged (Caffeine)</p>
                            <div className="sk-cart__item-modify d-flex justify-content-between">
                                <div className="sk-cart__select-number d-flex align-items-center justify-content-between">
                                    <button className="sk-cart__plus-minus color-white color-brand-bg"><i className="fas fa-minus"></i></button>
                                    <p className="p-small font-bold color-black">1</p>
                                    <button className="sk-cart__plus-minus color-white plus-icon color-brand-bg"><i className="fas fa-plus"></i></button>
                                </div>
                                <h4 className="color-black">$300</h4>
                            </div>
                        </div>
                    </div>
                </figure>
            </figure>

            <div className="sk-cart__checkout-msg text-center">
                <p className="p-small">Shipping and tax calculated at checkout</p>
            </div>

            <div className="sk-cart__login-path text-center">
                <p className="color-black p-small font-bold">Returning customer? 
                <a href="#" className="link-hover color-black font-reg">Login to checkout</a></p>
            </div>

            <figure className="sk-cart__padd sk-cart__chackout-btn-wrap">
                <button className="button button-large sk-cart__chackout-btn position-relative">CHECKOUT</button>
            </figure>

            <figure className="text-center sk-cart__padd sk-cart__payment">
                <a href="#"><img src="/assets/images/verified-2.png" alt="verified-2" className="img-fluid sk-cart__varified-logo" /></a>
                <ul className="d-flex justify-content-center sk-cart__payment-method">
                    <li><img className="sk-cart__payment-icon" src="/assets/images/americanexpress.png" alt="americanexpress" /></li>
                    <li><img className="sk-cart__payment-icon" src="/assets/images/mastercard.png" alt="mastercard" /></li>
                    <li><img className="sk-cart__payment-icon" src="/assets/images/visa.png" alt="visa" /></li>
                </ul>
                <p className="p-small sk-cart__we-accept">Mastercard, Visa and Amex <br/>Credit Cards accepted</p>
            </figure>

            <figure className="text-center sk-cart__shipment">
                <img src="/assets/images/shipment.png" alt="shipment" className="sk-cart__shipment-icon" />
                <p className="p-small">Orders typically ship with 2-4 days. Shipping in peak times will vary based on product selection and shipping address.</p>
                <a href="#" className="link-hover p-small">Shipping Policy</a>
            </figure>
        </div>
    )
}

export default CartSidebar
