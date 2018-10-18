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
import { getAlternatives } from '../../store/question'

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
      questionAlternatives: [],
      options: [
        { value: 'A', label: 'A', checked: false },
        { value: 'B', label: 'B', checked: false },
        { value: 'C', label: 'C', checked: false },
        { value: 'D', label: 'D', checked: false },
      ],
    }
  }

  componentWillMount() {
    this.filterQuestionsAlternatives()
  }

  filterQuestionsAlternatives() {
    const { alternatives } = this.props
    const questionAlternatives = alternatives.filter(
      alternative => alternative.question_id == this.state.question.id,
    )
    this.setState({ questionAlternatives })
    this.setCorrectQuestionRadio(questionAlternatives)
  }

  setCorrectQuestionRadio(questionAlternatives) {
    for (let index = 0; index < questionAlternatives.length; index++) {
      if (questionAlternatives[index].correct) {
        let options = this.state.options
        options[index].checked = true
        this.setState({
          options: options,
        })
      }
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
            value={this.state.questionAlternatives[0].description}
            onChange={event =>
              this.setState({ questionAlternatives: event.target.value })
            }
            name="alternativeA"
            label="Alternativa A:"
            as={TextArea}
          />
          <Field
            id="alternativeB"
            value={this.state.questionAlternatives[1].description}
            onChange={event =>
              this.setState({ questionAlternatives: event.target.value })
            }
            name="alternativeB"
            label="Alternativa B:"
            as={TextArea}
          />
          <Field
            id="alternativeC"
            value={this.state.questionAlternatives[2].description}
            onChange={event =>
              this.setState({ questionAlternatives: event.target.value })
            }
            name="alternativeC"
            label="Alternativa C:"
            as={TextArea}
          />
          <Field
            id="alternativeD"
            value={this.state.questionAlternatives[3].description}
            onChange={event =>
              this.setState({ questionAlternatives: event.target.value })
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
            onChange={event => this.setOption(event.target.id)}
            name="correctAlternative"
            className="space-stack-l"
            label="Alternativa correta:"
            as={RadioGroup}
            name="radio"
            options={this.state.options}
          />
          <footer className="flex justify-end">
            <Button>Salvar questão</Button>
          </footer>
        </Form>
      </div>
    )
  }

  setOption(label) {
    let options = this.state.options
    let questionAlternatives = this.state.questionAlternatives
    for (let index = 0; index < options.length; index++) {
      if (options[index].label === label) {
        questionAlternatives[index].correct = true
        options[index].checked = true
      } else {
        questionAlternatives[index].correct = false
        options[index].checked = false
      }
    }
    this.setState({
      options,
      questionAlternatives,
    })
  }

  onPressSaveQuestion = () => {
    console.log('chamando serviço de atualizar questão...')
  }
}
const mapStateToProps = state => ({
  alternatives: getAlternatives(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        saveQuestion,
      },
      dispatch,
    ),
)(EditQuestion)
