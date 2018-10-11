import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Card from 'components/Card'

import { growl } from 'store/ui/actions'

import Button from 'components/Button'
import AvailableQuestions from 'components/AvailableQuestions'
import './listQuestions.scss'

const questionsData = [
  {
    description:
      'bavlsadaskdjsakdlsajaslkdsabavlsadaskdjsakdlsajaslkdsabavlsadaskdjsakdlsajaslkdsabavlsadaskdjsakdlsajaslkdsabavlsadaskdjsakdlsajaslkdsabavlsadaskdjsakdlsajaslkdsa',
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
      question: questionsData,
    }
  }

  render() {
    return (
      <div className="flex flex-column">
        <h1 className="flex">Lista de Questões</h1>
        <div className="flex justify-between ">
          <h6 className="listQuestios__h6">Enunciado</h6>
          <h6 className="listQuestios__h6">Data de criação</h6>
        </div>
        <div className="flex flex-column">
          <AvailableQuestions data={this.state.question} className="flex" />
        </div>
      </div>
    )
  }
}

export default ListQuestions
