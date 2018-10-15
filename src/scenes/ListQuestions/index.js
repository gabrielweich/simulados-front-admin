import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Card from 'components/Card'

import { growl } from 'store/ui/actions'

import { fetchQuestions } from 'store/question/actions'
import { getQuestions } from 'store/question'
import Button from 'components/Button'
import AvailableQuestions from 'components/AvailableQuestions'
import './listQuestions.scss'

class ListQuestions extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.fetchQuestions(1, 1, 0, 0)
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
          <AvailableQuestions data={this.props.questions} className="flex" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: getQuestions(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchQuestions,
        push,
      },
      dispatch,
    ),
)(ListQuestions)
