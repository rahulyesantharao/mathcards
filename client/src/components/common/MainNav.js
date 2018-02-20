import React from 'react';
// import PropTypes from 'prop-types';
import ActionBar from './ActionBar';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  toggleMenu() {
    this.setState((prevState) => ({menuOpen: !prevState.menuOpen}));
  }

  render() {
    return(
      <div>
        <ActionBar active={this.state.menuOpen} toggleMenu={this.toggleMenu.bind(this)}/>
        <main className="column is-9-desktop is-offset-3-desktop is-9-tablet is-offset-3-tablet is-12-mobile">
          <div className="card">
            <p>
              Test this
            </p>
          </div>
        </main>
      </div>
    );
  }
}
MainNav.propTypes = {
}
export default MainNav;
