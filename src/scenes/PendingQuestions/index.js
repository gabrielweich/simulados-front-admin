import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { fetchQuestions } from 'store/question/actions'
import { getQuestions } from 'store/question'
import { getData } from 'store/user'
import AvailableQuestions from 'components/AvailableQuestions'
import './pendingQuestions.scss'

class PendingQuestions extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const { profile } = this.props
    await this.props.fetchQuestions(profile.data.professor.id)
  }

  render() {
    const { questions } = this.props

    if (!questions) return null

    const filteredQuestions = questions.filter(
      question => question.approved === false,
    )

    return (
      <div className="flex flex-column">
        <h1 className="flex">Lista de Questões</h1>
        <div className="flex justify-between ">
          <h6 className="listQuestions__h6">Enunciado</h6>
          <h6 className="listQuestions__h6">Data de criação</h6>
        </div>
        <div className="flex flex-column">
          {!!filteredQuestions && !filteredQuestions.length === 0 ? (
            <AvailableQuestions
              data={filteredQuestions}
              className="flex"
              isApproval
            />
          ) : (
            <h5 className="text-center listQuestions__h5">
              Você não possui questôes para aprovar.
            </h5>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: getQuestions(state),
  profile: getData(state),
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
)(PendingQuestions)
