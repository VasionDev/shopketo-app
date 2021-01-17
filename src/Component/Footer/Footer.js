import React from 'react'

function Footer() {
    return (
        <footer className="footer color-black-bg">
            <div className="footer__top border-bottom-2">
                <div className="container">
                    <div className="footer__logo-box">
                        <a href="#"><img src="/assets/images/pruvitnow-logo-footer.png" alt="Logo Footer" className="img-fluid footer__logo"/></a>
                    </div>
                    <div className="footer__nav">
                        <div className="footer__nav-content">
                            <div className="footer__nav-item footer__nav-item-d">
                                <figure className="footer__links">
                                    <p className="disclaimer-bold color-white-dsrk">Join</p>
                                    <ul className="footer__links-list">
                                    <li><a href="#" className="footer__link disclaimer-reg color-gray">Join as Customer</a></li>
                                    <li><a href="#" className="footer__link disclaimer-reg color-gray">Join as Promoter</a></li>
                                    <li><a href="#" className="footer__link disclaimer-reg color-gray">Upgrade to Promoter</a></li>
                                    </ul>
                                </figure>
                            </div>

                            <div className="footer__nav-item footer__nav-item-d">
                                <figure className="footer__links">
                                    <p className="disclaimer-bold color-white-dsrk">Company</p>
                                    <ul className="footer__links-list">
                                    <li><a href="#" className="footer__link disclaimer-reg color-gray">About</a></li>
                                    <li><a href="#" className="footer__link disclaimer-reg color-gray">Promoter Rewards</a></li>
                                    </ul>
                                </figure>
                            </div>

                            <div className="footer__nav-item footer__nav-item-d">
                                <figure className="footer__links">
                                    <p className="disclaimer-bold color-white-dsrk">Help & Information</p>
                                    <ul className="footer__links-list">
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">Help Center</a></li>
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">Privacy</a></li>
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">Refund Policy</a></li>
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">Refund Policy</a></li>
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">terms</a></li>
                                    </ul>
                                </figure>
                            </div>

                            <div className="accordion footer__nav-item-m" id="accordionExample">
                                <div>
                                    <div className="" id="headingOne">
                                        <p className="mb-0 disclaimer-bold color-white-dsrk expend-icon" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" role="button">
                                        Join</p>
                                    </div>
                
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <ul className="footer__links-list-m">
                                            <li><a href="#" className="footer__link disclaimer-reg color-gray">Join as Customer</a></li>
                                            <li><a href="#" className="footer__link disclaimer-reg color-gray">Join as Promoter</a></li>
                                            <li><a href="#" className="footer__link disclaimer-reg color-gray">Upgrade to Promoter</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className="" id="headingTwo">
                                        <p className="mb-0 disclaimer-bold color-white-dsrk expend-icon" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                                        Company
                                        </p>
                                    </div>
                
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <ul className="footer__links-list-m">
                                            <li><a href="#" className="footer__link disclaimer-reg color-gray">About</a></li>
                                            <li><a href="#" className="footer__link disclaimer-reg color-gray">Promoter Rewards</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                <div className="" id="headingThree">
                                    <p className="mb-0 disclaimer-bold color-white-dsrk expend-icon" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                                        Help & Information
                                    </p>
                                </div>
                
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <ul className="footer__links-list-m">
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">Help Center</a></li>
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">Privacy</a></li>
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">Refund Policy</a></li>
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">Refund Policy</a></li>
                                        <li><a href="#" className="footer__link disclaimer-reg color-gray">terms</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                            <div className="footer__nav-item">
                                <figure className="footer__links">
                                    <p className="disclaimer-bold color-white-dsrk">Follow</p>
                                    <ul className="footer__social-icon">
                                        <li><a href="#" className="footer__social-img"><img src="/assets/images/facebook.png" alt="facebook" className="img-fluid"/></a></li>
                                        <li><a href="#" className="footer__social-img"><img src="/assets/images/twitter.png" alt="twitter" className="img-fluid"/></a></li>
                                        <li><a href="#" className="footer__social-img"><img src="/assets/images/instagram.png" alt="instagram" className="img-fluid"/></a></li>
                                    </ul>
                                </figure>
                            </div>
                            <div className="footer__nav-item">
                                <figure className="footer__links">
                                    <p className="disclaimer-bold color-white-dsrk footer__payments-title">🔒 Secure Payments</p>
                                    <div className="footer__payments">
                                        <a href="#"><img src="/assets/images/verified.png" alt="verified" className="img-fluid footer__verified"/></a>
                                    
                                        <ul className="footer__payments-icons">
                                            <li><a href="#" className="footer__payments-img"><img src="/assets/images/visa.png" alt="visa" className="img-fluid"/></a></li>
                                            <li><a href="#" className="footer__payments-img"><img src="/assets/images/mastercard.png" alt="mastercard" className="img-fluid"/></a></li>
                                            <li><a href="#" className="footer__payments-img"><img src="/assets/images/americanexpress.png" alt="americanexpress" className="img-fluid"/></a></li>
                                        </ul>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-content color-gray">
                        <p className="copyright-text footer__bottom-text-left footer__bottom-copy">Copyright @ 2019 Pruvit Ventures, Inc. All rights reserved.</p>

                        <p className="copyright-text footer__bottom-text-right">† These statements have not been evaluated by the FDA. This product is not intended to diagnose, <span className="br-desktop">treat, cure, or prevent any disease.</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
