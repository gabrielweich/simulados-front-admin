import React from 'react'
import Card from 'components/Card'

const questions = [
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

const AvaliableQuestions = () => ({
  questions: questions.map(question => <Card>{question.description}</Card>),
})

export default AvaliableQuestions
