import React from 'react'
import Moment from 'react-moment'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Card from 'components/Card'

import './availableQuestions.scss'

const AvailableQuestions = props =>
  props.data.map(question => (
    <Card
      className="cardQuestion flex justify-between"
      onClick={() => props.push('/edit', { question })}
      key={question.id}
    >
      <h6 className="cardQuestion__h6 ">{question.statement}</h6>
      <h6>
        <Moment format="DD/MM/YYYY">{question.created_at}</Moment>
      </h6>
    </Card>
  ))

export default connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        push,
      },
      dispatch,
    ),
)(AvailableQuestions)
