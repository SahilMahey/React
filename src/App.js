import React from 'react'
import logo from '../src/logo.svg'
import retro from '../src/image-retro-pcs.jpg'
import gaming from '../src/image-gaming-growth.jpg'
import laptop from '../src/image-top-laptops.jpg'
import './App.css'
function App() {
  return (
   <div className="container_">
    <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
  <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3 ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">New</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Popular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Categories</a>
          </li>
        </ul>
      </div>
      </div>
      
</nav>
<div className="main_image">
</div>
<div className="main_heading">
<h1>The Bright Future of Web 3.0?</h1>
</div>
<div className="main_para">
<p>
We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?
</p>
<button>READ MORE</button>
</div>
<div className="box">
    <h2>New </h2>
    <div className="box1">
    <h3>Hydrogen VS Electric Cars</h3>
    <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
    </div>
    <div className="box2">
    <h3>The Downsides of AI Artistry</h3>
    <p>What are the possible adverse effects of on-demand AI image generation?</p>
    </div>
    <div className="box3">
    <h3>Is VC Funding Drying Up?</h3>
    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
    </div>
</div>


<div className="card_ card1 d-flex">
  <img src={retro} className="card-img-top" alt="..." />
  <div className="card-body">
  <h4 className="card-title">01</h4>
    <p className="card-text1">Reviving Retro PCs</p>
    <p className="card-text2">What happens when old PCs are given modern upgrades?</p>
  </div>
</div>

<div className="card_ card2 d-flex">
  <img src={laptop} className="card-img-top" alt="..." />
  <div className="card-body">
  <h4 className="card-title">02</h4>
    <p className="card-text1">Top 10 Laptops of 2022</p>
    <p className="card-text2">Our best picks for various needs and budgets.</p>
  </div>
</div>

<div className="card_ card3 d-flex">
  <img src={gaming} className="card-img-top" alt="..." />
  <div className="card-body">
  <h4 className="card-title">03</h4>
    <p className="card-text1">The Growth of Gaming</p>
    <p className="card-text2">How the pandemic has sparked fresh opportunities.</p>
  </div>
</div>
</div>
  );
}

export default App

