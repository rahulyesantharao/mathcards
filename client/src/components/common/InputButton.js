import React from 'react';
import PropTypes from 'prop-types';

const InputButton = (props) => {
  return(
    <div>
      <input id={props.name}
        name={props.name}
        autoComplete="false"
        value={props.label}
        type={props.type}></input>
    </div>
  );
}

InputButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default InputButton;
