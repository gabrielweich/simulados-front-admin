import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Card from 'components/Card'
//import AvaliableQuestions from 'components/AvaliableQuestions'

import { growl } from 'store/ui/actions'

import Button from 'components/Button'
import './listQuestions.scss'

let questionsData = 'jaSLAkskjl'
class ListQuestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataQuestion: 'dksadlasçd',
    }
  }

  render() {
    return (
      <div className="flex flex-column justify-center items-center login__maincontainer">
        <h1>TELA DE LISTAR QUESTOES</h1>
        <Card>
          <h5 className="flex justify-left">Enunciado</h5>
          <h5 className="flex flex-column justify-right">Data de criação</h5>
        </Card>
      </div>
    )
  }
}

export default ListQuestions
