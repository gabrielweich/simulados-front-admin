import React from 'react'
import Container from 'components/Container'
import Card from 'components/Card'
import Field from 'components/Field'
import Input, { TextArea } from 'components/Input'
import Button from 'components/Button'
import RadioGroup from 'components/RadioGroup'
import Form from 'components/Form'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { saveQuestion } from 'store/question/actions'

class EditQuestion extends React.Component {
  constructor(props) {
    super(props)

    const { question } = this.props.location.state

    this.state = {
      question: question,
      statement: question.statement,
      alternativeA: '',
      alternativeB: '',
      alternativeC: '',
      alternativeD: '',
      comment: question.comment,
      complementaryMaterial: question.studyMaterials,
      correctAlternative: '',
    }
  }

  render() {
    return (
      <div>
        <h1>Editar Questão</h1>
        <Form
          onSubmit={this.onPressSaveQuestion}
          type="submit"
          className="flex flex-column"
        >
          <Field
            id="statement"
            value={this.state.statement}
            onChange={event => this.setState({ statement: event.target.value })}
            name="statement"
            label="Enunciado da questão"
            as={TextArea}
            type="text"
          />
          <Field
            id="alternativeA"
            value={this.state.alternativeA}
            onChange={event =>
              this.setState({ alternativeA: event.target.value })
            }
            name="alternativeA"
            label="Alternativa A:"
            as={TextArea}
          />
          <Field
            id="alternativeB"
            value={this.state.alternativeB}
            onChange={event =>
              this.setState({ alternativeB: event.target.value })
            }
            name="alternativeB"
            label="Alternativa B:"
            as={TextArea}
          />
          <Field
            id="alternativeC"
            value={this.state.alternativeC}
            onChange={event =>
              this.setState({ alternativeC: event.target.value })
            }
            name="alternativeC"
            label="Alternativa C:"
            as={TextArea}
          />
          <Field
            id="alternativeD"
            value={this.state.alternativeD}
            onChange={event =>
              this.setState({ alternativeD: event.target.value })
            }
            name="alternativeD"
            label="Alternativa D:"
            as={TextArea}
          />
          <Field
            id="comment"
            value={this.state.comment}
            onChange={event => this.setState({ comment: event.target.value })}
            name="comment"
            label="Comentário do Professor:"
            as={TextArea}
          />
          <Field
            id="complementaryMaterial"
            value={this.state.complementaryMaterial}
            onChange={event =>
              this.setState({ complementaryMaterial: event.target.value })
            }
            name="complementaryMaterial"
            label="Material Complementar"
          />
          <Field
            id="correctAlternative"
            value={this.state.correctAlternative}
            onChange={event =>
              this.setState({ correctAlternative: event.target.id })
            }
            name="correctAlternative"
            className="space-stack-l"
            label="Alternativa correta:"
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
            <Button>Salvar questão</Button>
          </footer>
        </Form>
      </div>
    )
  }

  onPressSaveQuestion = () => {
    console.log('chamando serviço de atualizar questão...')
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
)(EditQuestion)
