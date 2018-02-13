import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return(
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name}
        name={props.name}
        autoComplete="false"
        required={props.required}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.handleChange}></input>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Input;
