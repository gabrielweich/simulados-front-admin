import React from 'react'
import Container from 'components/Container'
import Card from 'components/Card'
import Field from 'components/Field'
import Input, { TextArea } from 'components/Input'
import Button from 'components/Button'
import RadioGroup from 'components/RadioGroup'
import Form from 'components/Form'
import { getData } from 'store/user'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { editQuestion } from 'store/question/actions'
import { getAlternatives } from '../../store/question'

class EditQuestion extends React.Component {
  constructor(props) {
    super(props)

    const { question } = props.location.state
    this.state = {
      question: question,
      statement: question.statement,
      comment: question.comment,
      complementaryMaterial: question.studyMaterials,
      correctAlternative: '',
      questionAlternatives: [],
      correctRadioIndex: '',
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

  async setCorrectQuestionRadio(questionAlternatives) {
    for (let index = 0; index < questionAlternatives.length; index++) {
      if (questionAlternatives[index].correct) {
        const options = this.state.options
        const newOptions = options.map(
          (item, indexOp) =>
            index === indexOp ? { ...item, checked: true } : item,
        )
        await this.setState({
          options: newOptions,
          correctRadioIndex: index,
        })
      }
    }
  }

  onChangeAlternative(text, index) {
    const alternatives = this.state.questionAlternatives
    alternatives[index].description = text
    this.setState({
      questionAlternatives: alternatives,
    })
  }

  setOption(label) {
    let options = this.state.options
    let questionAlternatives = this.state.questionAlternatives
    for (let index = 0; index < options.length; index++) {
      if (options[index].label === label) {
        questionAlternatives[index].correct = true
        options[index].checked = true
        this.setState({
          correctRadioIndex: index,
        })
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

  onPressEditQuestion = () => {
    const {
      statement,
      comment,
      complementaryMaterial,
      questionAlternatives,
      correctRadioIndex,
      question,
    } = this.state

    const updatedQuestion = {
      id: question.id,
      professor_id: question.professor_id,
      coordinator_id: question.coordinator_id,
      subarea_id: question.subarea_id,
      approved: question.approved,
      statement: statement,
      correctAlternativeIndex: correctRadioIndex,
      comment: comment,
      studyMaterials: complementaryMaterial,
      questionAlternatives: questionAlternatives,
    }
    this.props.editQuestion(updatedQuestion)
  }
  render() {
    const {
      questionAlternatives,
      comment,
      statement,
      complementaryMaterial,
      options,
    } = this.state

    return (
      <div>
        <h1>Editar Questão</h1>
        <Form
          onSubmit={this.onPressEditQuestion}
          type="submit"
          className="flex flex-column"
        >
          <Field
            id="statement"
            value={statement}
            onChange={event => this.setState({ statement: event.target.value })}
            name="statement"
            label="Enunciado da questão"
            as={TextArea}
            type="text"
          />
          <Field
            id="alternativeA"
            value={questionAlternatives[0].description}
            onChange={event => this.onChangeAlternative(event.target.value, 0)}
            name="alternativeA"
            label="Alternativa A:"
            as={TextArea}
          />
          <Field
            id="alternativeB"
            value={questionAlternatives[1].description}
            onChange={event => this.onChangeAlternative(event.target.value, 1)}
            name="alternativeB"
            label="Alternativa B:"
            as={TextArea}
          />
          <Field
            id="alternativeC"
            value={questionAlternatives[2].description}
            onChange={event => this.onChangeAlternative(event.target.value, 2)}
            name="alternativeC"
            label="Alternativa C:"
            as={TextArea}
          />
          <Field
            id="alternativeD"
            value={questionAlternatives[3].description}
            onChange={event => this.onChangeAlternative(event.target.value, 3)}
            name="alternativeD"
            label="Alternativa D:"
            as={TextArea}
          />
          <Field
            id="comment"
            value={comment}
            onChange={event => this.setState({ comment: event.target.value })}
            name="comment"
            label="Comentário do Professor:"
            as={TextArea}
          />
          <Field
            id="complementaryMaterial"
            value={complementaryMaterial}
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
            options={options}
          />
          <footer className="flex justify-end">
            <Button>Salvar questão</Button>
          </footer>
        </Form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  alternatives: getAlternatives(state),
  profile: getData(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        editQuestion,
      },
      dispatch,
    ),
)(EditQuestion)
