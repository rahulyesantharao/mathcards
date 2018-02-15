import React from 'react';
import PropTypes from 'prop-types';

const ActionBar = (props) => {
  return(
    <nav>
      <div className={(props.active?"is-active":"") + " navbar-drawer"}>
        <div className="navbar-item">
          Link 1
        </div>
        <div className="navbar-item">
          Link 2
        </div>
      </div>
    </nav>
  );
}
ActionBar.propTypes = {
  active: PropTypes.bool.isRequired
}
export default ActionBar;
