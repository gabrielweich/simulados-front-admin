import React from 'react'
import Card from 'components/Card'

const AvaliableQuestions = () => {
  questions.map(question => (
    <Card className="avaliableQuestions" key={question.id}>
      {question.description}
    </Card>
  ))
}

export default AvaliableQuestions
