import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './Login.css';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.onLogin(this.email.current.value, this.password.current.value);
    // this.password.current.value = '';
  }

  render() {
    return (
      <Form id="login-form" onSubmit={this.handleLogin}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control type="email" placeholder="email@example.com" ref={this.email}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control type="password" placeholder="********" ref={this.password}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Button variant="primary" type="submit" size="sm">Log in</Button>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}
