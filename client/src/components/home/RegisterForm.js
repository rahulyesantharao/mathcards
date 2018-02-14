import React from 'react';
import Input from "../common/Input";
import InputButton from "../common/InputButton";

class RegisterForm extends React.Component {
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
    alert("Submitted!");
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <Input name="username" label="REGISTER" required={true} value={this.state.username} type="text" placeholder="" handleChange={this.handleChange.bind(this)}/>
      <Input name="password" label="Password" required={true} value={this.state.password} type="password" placeholder="" handleChange={this.handleChange.bind(this)}/>
      <InputButton name="submit" label="Submit" type="submit"/>
    </form>
    );
  }
}

export default RegisterForm;
