import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// const propTypes = {
//     title:propTypes.string.isRequired,
// };

// const defaultProps = {
//     title:'set title here'
// };

// /**
//  * 
//  */
const Navbar = (props) => {
    return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.AboutText}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contact us</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <div className="form-check form-switch text-success"> */}
      <div className={`form-check form-switch-reverse text-${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
{/* <div className={`form-check form-switch-reverse text-${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input" type="radio" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div> */}
    </div>
  </div>
  {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label> */}
{/* </div> */}
</nav> 
    );
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    AboutText:PropTypes.string.isRequired
}
Navbar.defaultProps ={
    title:'set title here',
    AboutText:'About'
}
// #endregion

export default Navbar;