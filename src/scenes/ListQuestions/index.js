import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Card from 'components/Card'

import { growl } from 'store/ui/actions'

import Button from 'components/Button'
import './listQuestions.scss'

const idQuestions = [
  {
    description: 'bavlsadaskdjsakdlsajaslkdsa',
    date: '12/02/2012',
    approved: true,
  },
  {
    description: 'bavlsadaskdjsakdlsajaslkdsa',
    date: '12/02/2012',
    approved: true,
  },
  {
    description: 'bavlsadaskdjsakdlsajaslkdsa',
    date: '12/02/2012',
    approved: true,
  },
  {
    description: 'bavlsadaskdjsakdlsajaslkdsa',
    date: '12/02/2012',
    approved: true,
  },
]
class ListQuestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: idQuestions,
    }
  }

  render() {
    return (
      <div className="flex flex-column justify-center items-center login__maincontainer">
        <h1>Lista de Questões</h1>
        <h5 className="leftword">Enunciado</h5>
        <h5 className="rightword">Data de criação</h5>
      </div>
    )
  }
}

export default ListQuestions
