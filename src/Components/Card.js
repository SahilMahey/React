import React from 'react'
import '../App.css'
import retro from '../../src/image-retro-pcs.jpg'
import gaming from '../../src/image-gaming-growth.jpg'
import laptop from '../../src/image-top-laptops.jpg'
function Card() {
  return (
   <>
<div className="card_ card1 d-flex">
  <img src={retro} className="card-img-top img-fluid" alt="..." />
  <div className="card-body">
  <h4 className="card-title">01</h4>
    <p className="card-text1">Reviving Retro PCs</p>
    <p className="card-text2">What happens when old PCs are given modern upgrades?</p>
  </div>
</div>

<div className="card_ card2 d-flex">
  <img src={laptop} className="card-img-top img-fluid" alt="..." />
  <div className="card-body">
  <h4 className="card-title">02</h4>
    <p className="card-text1">Top 10 Laptops of 2022</p>
    <p className="card-text2">Our best picks for various needs and budgets.</p>
  </div>
</div>

<div className="card_ card3 d-flex">
  <img src={gaming} className="card-img-top img-fluid" alt="..." />
  <div className="card-body">
  <h4 className="card-title">03</h4>
    <p className="card-text1">The Growth of Gaming</p>
    <p className="card-text2">How the pandemic has sparked fresh opportunities.</p>
  </div>
</div>
</>
  )
}

export default Card
