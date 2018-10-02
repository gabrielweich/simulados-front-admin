import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { growl } from 'store/ui/actions'
import Form from 'components/Form'

import Input from 'components/Input'
import Button from 'components/Button'
import { fetchAuth, logout } from 'store/user/actions'
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    this.props.logout()
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Simulados OAB - Administrativo</h1>

        <div className="flex flex-column justify-center login__inputcontainer">
          <Form
            onSubmit={event => this.onPressEnter(event)}
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

  async onPressEnter(event) {
    const { email, password } = this.state
    await this.props.fetchAuth(email, password)
    this.props.push('/examples')
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
        fetchAuth,
        logout,
      },
      dispatch,
    ),
)(Login)
