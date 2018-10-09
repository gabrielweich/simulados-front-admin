import React from 'react'
import Card from 'components/Card'

const avaliableQuestions = this.props.data

avaliableQuestions => {
  avaliableQuestions.map(questions => (
    <Card className="avaliableQuestions">{questions.data}</Card>
  ))
}

export default AvaliableQuestions
