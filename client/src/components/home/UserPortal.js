import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Animation from '../common/Animations';
// import {TransitionGroup} from 'react-transition-group';
// import {SlideLeft, SlideRight} from '../common/Animations';
class UserPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    }
  }

  showLogin() {
    if(!this.state.login) {
      this.setState({login:true});

    }
  }

  showRegister() {
    if(this.state.login) {
      this.setState({login:false});
    }
  }

  render() {
    const activeStyle = {
      // paddingBottom: '10px',
      // borderBottom: 'solid 2px #1059FF',
      textDecoration: "underline"
    };
    return(
    <div className="column is-12-mobile is-8-tablet is-6-desktop">
      <div className="card">
        <h1 className="is-centered">MATHCARDS</h1>
        <h2 className="is-centered">
          <span className="clickable" onClick={this.showLogin.bind(this)} style={this.state.login?activeStyle:{}}>Login</span> | <span className="clickable" onClick={this.showRegister.bind(this)} style={this.state.login?{}:activeStyle}>Sign Up</span>
        </h2>
        <Animation mounted={this.state.login?true:false}><LoginForm/></Animation>
        <Animation mounted={this.state.login?false:true}><RegisterForm/></Animation>
      </div>
    </div>
    );
  }
}

export default UserPortal;
