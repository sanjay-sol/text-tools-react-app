import React from 'react';
// import styled from 'styled-components';
//import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Alert = (props) => {
    return (
        
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    <strong>{props.alert.type}</strong> : {props.alert.msg}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>    
  
    );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
// #endregion

export default Alert;