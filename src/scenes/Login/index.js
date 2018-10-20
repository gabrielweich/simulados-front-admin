import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { growl } from 'store/ui/actions'
import Form from 'components/Form'

import Input from 'components/Input'
import Button from 'components/Button'
import { login } from 'store/user/actions'
import logo from 'assets/logo.png'
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <div className="flex flex-column justify-center items-center login__maincontainer">
        <img className="login__logoimage" src={logo} />
        <h1 className="h1 text-center">Entrar na sua conta</h1>
        <div className="flex flex-column login__inputcontainer">
          <Form
            onSubmit={this.onPressEnter}
            type="submit"
            className="flex flex-column"
          >
            <Input
              onChange={event => this.setState({ email: event.target.value })}
              placeholder="e-mail"
              className="login__input"
              maxLength={50}
              value={this.state.email}
              type="text"
              required
            />
            <Input
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              placeholder="senha"
              type="password"
              maxLength={50}
              className="login__input"
              value={this.state.password}
              required
            />
            <Button className="flex justify-center login__button">
              Fazer Login
            </Button>
          </Form>
          {this.renderLine()}
        </div>
      </div>
    )
  }

  onPressEnter = async () => {
    const { email, password } = this.state
    await this.props.login(email, password)
    this.props.push('/')
  }

  renderLine() {
    return (
      <div className="flex justify-center items-center">
        <div className="login__lineleft" />
        <div className="login__lineright" />
      </div>
    )
  }
}

export default connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        growl,
        push,
        login,
      },
      dispatch,
    ),
)(Login)
