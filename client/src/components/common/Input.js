import React from 'react';
import PropTypes from 'prop-types';

const Input = () => {
  return(
    <div>
      <label htmlFor={this.props.id}>{this.props.name}</label>
      <input id={this.props.id}
        name={this.props.id}
        autoComplete="false"
        required={this.props.required}
        value={this.props.value}
        type={this.props.type}
        placeholder={this.props.placeholder}></input>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.required,
  name: PropTypes.string.required,
  required: PropTypes.bool.required,
  value: PropTypes.string.required,
  type: PropTypes.string.required,
  placeholder: PropTypes.string.required
}

export default Input;
