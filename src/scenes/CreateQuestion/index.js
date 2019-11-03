import React from 'react'
import Container from 'components/Container'
import Card from 'components/Card'
import Field from 'components/Field'
import Input, { TextArea } from 'components/Input'
import Button from 'components/Button'
import RadioGroup from 'components/RadioGroup'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { saveQuestion } from 'store/question/actions'

class CreateQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      statement: '',
      alternativeA: '',
      alternativeB: '',
      alternativeC: '',
      alternativeD: '',
      comment: '',
      studyMaterials: '',
      right_alternative: '',
    }
  }

  saveQuestion = async () => {
    await this.props.saveQuestion(this.state)
    this.props.history.push('/')
  }

  handleFormChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAlternativeChange = event => {
    this.setState({ right_alternative: event.target.id })
  }

  render() {
    return (
      <div>
        <h1>Nova Questão</h1>
        <Field
          id="statement"
          value={this.state.statement}
          onChange={this.handleFormChange}
          name="statement"
          label="Insira o enunciado da questão"
          as={TextArea}
        />
        <Field
          id="alternativeA"
          value={this.state.alternativeA}
          onChange={this.handleFormChange}
          name="alternativeA"
          label="Alternativa A:"
          as={TextArea}
        />
        <Field
          id="alternativeB"
          value={this.state.alternativeB}
          onChange={this.handleFormChange}
          name="alternativeB"
          label="Alternativa B:"
          as={TextArea}
        />
        <Field
          id="alternativeC"
          value={this.state.alternativeC}
          onChange={this.handleFormChange}
          name="alternativeC"
          label="Alternativa C:"
          as={TextArea}
        />
        <Field
          id="alternativeD"
          value={this.state.alternativeD}
          onChange={this.handleFormChange}
          name="alternativeD"
          label="Alternativa D:"
          as={TextArea}
        />
        <Field
          id="comment"
          value={this.state.comment}
          onChange={this.handleFormChange}
          name="comment"
          label="Comentário do Professor:"
          as={TextArea}
        />
        <Field
          id="studyMaterials"
          value={this.state.studyMaterials}
          onChange={this.handleFormChange}
          name="studyMaterials"
          label="Material Complementar"
        />
        <Field
          id="right_alternative"
          value={this.state.right_alternative}
          onChange={this.handleAlternativeChange}
          name="right_alternative"
          className="space-stack-l"
          label="Informar qual é a alternativa correta"
          as={RadioGroup}
          name="radio"
          options={[
            { value: 'A', label: 'A' },
            { value: 'B', label: 'B' },
            { value: 'C', label: 'C' },
            { value: 'D', label: 'D' },
          ]}
        />
        <footer className="flex justify-end">
          <Button onClick={this.saveQuestion}>Salvar questão</Button>
        </footer>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        saveQuestion,
      },
      dispatch,
    ),
)(CreateQuestion)
