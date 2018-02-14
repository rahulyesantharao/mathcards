import React from 'react';
import Input from "../common/Input";
import InputButton from "../common/InputButton";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Submitted!");
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <div className="columns">
        <Input className="column is-12-mobile is-12-tablet is-6-desktop" name="first" label="First Name" required={true} value={this.state.first} type="text" placeholder="" handleChange={this.handleChange.bind(this)}/>
        <Input className="column is-12-mobile is-12-tablet is-6-desktop" name="last" label="Last Name" required={true} value={this.state.last} type="text" placeholder="" handleChange={this.handleChange.bind(this)}/>
      </div>
      <Input name="username" label="Username" required={true} value={this.state.username} type="text" placeholder="" handleChange={this.handleChange.bind(this)}/>
      <Input name="email" label="Email" required={true} value={this.state.email} type="email" placeholder="" handleChange={this.handleChange.bind(this)}/>
      <Input name="password" label="Password" required={true} value={this.state.password} type="password" placeholder="" handleChange={this.handleChange.bind(this)}/>
      <InputButton name="submit" label="Submit" type="submit"/>
    </form>
    );
  }
}

export default RegisterForm;
