import React from 'react';
// import PropTypes from 'prop-types';
import ActionBar from './ActionBar';

class MainNav extends React.Component {
  render() {
    return(
      <div>
        <ActionBar active={false}/>
        <main>
          <p>
            Test this
          </p>
        </main>
      </div>
    );
  }
}
MainNav.propTypes = {
}
export default MainNav;
