import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

import Input from 'components/Input'
import Button from 'components/Button'
import { fetchAuth } from 'store/user/actions'
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
            <div>
                <h1 className="text-center">Simulados OAB - Administrativo</h1>

                <div className="flex flex-column justify-center login__inputcontainer">
                    <Input
                        onChange={event => this.setState({ email: event.target.value })}
                        placeholder="e-mail"
                        className="login__input"
                        maxLength={50}
                        value={this.state.email}
                        type="text"
                    />
                    <Input
                        onChange={event => this.setState({ password: event.target.value })}
                        placeholder="senha"
                        type="password"
                        maxLength={50}
                        className="login__input"
                        value={this.state.password}
                    />
                    <Button
                        className="flex justify-center login__button"
                        onClick={() => this.onPressEnter()}
                    >
                        Entrar
          </Button>

                </div>
            </div>
        )
    }

    async onPressEnter() {
        const { email, password } = this.state

        if (email.length <= 0 || password.length <= 0) {
            this.props.growl('Informe seu e-mail e senha de acesso.', GROWL_ERROR)
        } else {
            console.log('tentando logar...')
            await this.props.fetchAuth(email, password)
            this.props.push('/dashboard')
        }
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
            },
            dispatch,
        ),
)(Login)