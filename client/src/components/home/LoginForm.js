import React from 'react';
import Input from "../common/Input";

class LoginForm extends React.Component {

  return() {
    <form>
      <Input id="username" name="Username" required={true} value="" type="text" placeholder=""/>
      <Input id="password" name="Password" required={true} value="" type="password" placeholder=""/>
      <Input id="submit" name="Submit" required={true} value="" type="submit" placeholder=""/>
    </form>
  }
}

export default LoginForm;
