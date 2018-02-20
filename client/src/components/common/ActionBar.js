import React from 'react';
import PropTypes from 'prop-types';

const ActionBar = (props) => {
  return(
    <nav>
      <div className={(props.active?"is-active":"") + " navbar-burger is-hidden-tablet"} onClick={props.toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={(props.active?"is-active":"") + " navbar-drawer column no-padding is-3-desktop is-3-tablet is-6-mobile"}>
        <div className="is-centered">
          <h1>MATHCARDS</h1>
        </div>
        <div className="navbar-item">
          <a href="#">Link 1</a>
        </div>
        <div className="navbar-item">
          <a href="#">Link 2</a>
        </div>
      </div>
    </nav>
  );
}
ActionBar.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}
export default ActionBar;
