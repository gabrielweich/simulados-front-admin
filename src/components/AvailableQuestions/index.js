import React from 'react'
import Card from 'components/Card'
import { push } from 'connected-react-router'
import './availableQuestions.scss'

const AvailableQuestions = props =>
  props.data.map(question => (
    <Card className="cardQuestion flex justify-between " onClick="">
      <h6 className="cardQuestion__h6 ">{question.description}</h6>
      <h6>{question.date}</h6>
    </Card>
  ))

export default AvailableQuestions
