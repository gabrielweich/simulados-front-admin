import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'components/Card'

import './availableQuestions.scss'

const AvailableQuestions = props =>
  props.data.map(question => (
    <Link
      to={{
        pathname: (props.isApproval ? '/approve/' : '/edit/') + question.id,
        state: {
          question,
        },
      }}
    >
      <Card className="cardQuestion flex justify-between" key={question.id}>
        <h6 className="cardQuestion__h6 ">{question.statement}</h6>
        <h6>{new Date(question.created_at).toLocaleDateString()}</h6>
      </Card>
    </Link>
  ))

export default AvailableQuestions
