import React from 'react'
import'../App.css';
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand img-fluid" href="#"><img src={props.image} alt="" /></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
  <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3 ">
          <li className="nav-item">
            <a className="nav-link a_link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link a_link" aria-current="page" href="/">New</a>
          </li>
          <li className="nav-item">
            <a className="nav-link a_link" aria-current="page" href="/">Popular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link a_link" href="/">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link a_link" href="/">Categories</a>
          </li>
        </ul>
      </div>
      </div>
      
</nav>
  )
}

export default Navbar
