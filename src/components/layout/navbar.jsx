import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active font-weight-bold" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light   " href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <ul className='navbar-nav'>
            <li className="nav-item">
            <a className="nav-link" href="checkout">Cart</a>
            </li>
            <li className='nav-item'>
            <a className="nav-link" href="#">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
