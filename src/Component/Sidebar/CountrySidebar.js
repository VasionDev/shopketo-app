import React from 'react'

function CountrySidebar(props) {
    return (
        <div className="sk-country color-white-bg">
    <ul className="sk-country__list accordion" id="accordionExample">
      <li className="sk-country__list-close">
        <a onClick={()=> props.closeSidebar(false)} className="sk-country__link button color-black pointer">
          <img src="/assets/images/cross-sign.png" alt="Cross sign" className="img-fluid cross-sign"/>
        </a>
      </li>


      <li>
        <a href="#" className="sk-country__link button color-black sk-country__expend-icon" data-toggle="collapse"  id="headingOne" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          
          <div className="d-flex justify-content-between align-items-center">
            <span><img className="img-fluid sk-country__logo" src="/assets/images/us.png" alt="US"/>English</span>
            <span className="disclaimer-reg color-black sk-country__link-lenguage">English</span>
          </div>
        </a>
    
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <ul className="sk-country__sub-list">
            <li><a href="#" className="sk-country__sub-link disclaimer-reg color-black">English</a></li>
            <li><a href="#" className="sk-country__sub-link disclaimer-reg color-black">Español</a></li>
          </ul>
        </div>
      </li>

      <li>
        <a href="#" className="sk-country__link button color-black sk-country__expend-icon" data-toggle="collapse"  id="headingTwo" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

          <div className="d-flex justify-content-between align-items-center">
            <span><img className="img-fluid sk-country__logo" src="/assets/images/canada.png" alt="US"/>Canada</span>
            <span className="disclaimer-reg color-black sk-country__link-lenguage">Español</span>
          </div>
          
        </a>
    
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <ul className="sk-country__sub-list">
            <li><a href="#" className="sk-country__sub-link disclaimer-reg color-black">English</a></li>
            <li><a href="#" className="sk-country__sub-link disclaimer-reg color-black">Español</a></li>
          </ul>
        </div>
      </li>

      <li>
        <a href="#" className="sk-country__link button color-black sk-country__expend-icon" data-toggle="collapse"  id="headingThree" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <div className="d-flex justify-content-between align-items-center">
            <span><img className="img-fluid sk-country__logo" src="/assets/images/us.png" alt="US"/>English</span>
            <span className="disclaimer-reg color-black sk-country__link-lenguage">English</span>
          </div>
        </a>
    
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <ul className="sk-country__sub-list">
            <li><a href="#" className="sk-country__sub-link disclaimer-reg color-black">English</a></li>
            <li><a href="#" className="sk-country__sub-link disclaimer-reg color-black">Español</a></li>
          </ul>
        </div>
      </li>

      <li>
        <a href="#" className="sk-country__link button color-black" data-toggle="collapse"  id="headingFour" data-target="#collapseFour" aria-expanded="false">
          <img className="img-fluid sk-country__logo" src="/assets/images/canada.png" alt="US"/>Canada
        </a>
      </li>

    </ul>
  </div>
    )
}

export default CountrySidebar
