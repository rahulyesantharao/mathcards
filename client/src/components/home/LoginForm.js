import React from 'react';
import PropTypes from 'prop-types';
import Input from "../common/Input";
import InputButton from "../common/InputButton";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 4));
  }

  render() {
    return (
    <form className={this.props.className} onSubmit={this.handleSubmit.bind(this)}>
      <div className="columns">
        <Input className="column is-12-mobile is-12-tablet is-12-desktop" name="username" label="Username" required={true} value={this.state.username} type="text" placeholder="" handleChange={this.handleChange.bind(this)}/>
        <Input className="column is-12-mobile is-12-tablet is-12-desktop" name="password" label="Password" required={true} value={this.state.password} type="password" placeholder="" handleChange={this.handleChange.bind(this)}/>
        <div className="column is-12-mobile is-12-tablet is-12-desktop">
          <InputButton name="submit" label="Submit" type="submit"/>
        </div>
      </div>

    </form>
    );
  }
}
LoginForm.propTypes = {
  className: PropTypes.string
}

export default LoginForm;
