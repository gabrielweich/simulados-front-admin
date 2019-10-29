import React from 'react'
import Field from 'components/Field'
import { TextArea } from 'components/Input'
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
      complementaryMaterial: '',
      correctAlternative: '',
    }
  }

  handleFormChange = event => {
    this.setState({ [event.target.name]: event.target.value })
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
          id="complementaryMaterial"
          value={this.state.complementaryMaterial}
          onChange={this.handleFormChange}
          name="complementaryMaterial"
          label="Material Complementar"
        />
        <Field
          id="correctAlternative"
          value={this.state.correctAlternative}
          onChange={this.handleFormChange}
          name="correctAlternative"
          className="space-stack-l"
          label="Informar qual é a alternativa correta"
          as={RadioGroup}
          options={[
            { value: 'alternativaA', label: 'A' },
            { value: 'alternativaB', label: 'B' },
            { value: 'alternativaC', label: 'C' },
            { value: 'alternativaD', label: 'D' },
          ]}
        />
        <footer className="flex justify-end">
          <Button onClick={() => this.props.saveQuestion(this.state)}>
            Salvar questão
          </Button>
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
