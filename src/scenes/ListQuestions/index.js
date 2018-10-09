import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { growl } from 'store/ui/actions'

import Button from 'components/Button'
import './listQuestions.scss'

class ListQuestions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="flex flex-column justify-center items-center login__maincontainer">
        <h1>TELA DE LISTAR QUESTOES</h1>
      </div>
    )
  }
}

export default ListQuestions
