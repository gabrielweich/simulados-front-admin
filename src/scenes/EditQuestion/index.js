import React from 'react'
import Field from 'components/Field'
import { TextArea } from 'components/Input'
import Button from 'components/Button'
import RadioGroup from 'components/RadioGroup'
import Form from 'components/Form'
import { getData } from 'store/user'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { editQuestion } from 'store/question/actions'
import { getAlternatives, getQuestions } from '../../store/question'

class EditQuestion extends React.Component {
  constructor(props) {
    super(props)

    const { id } = props.match.params
    const question = this.getQuestion(id)

    this.state = {
      question: question,
      statement: question.statement,
      comment: question.comment,
      rightAlternative: question.rightAlternative,
      complementaryMaterial: question.studyMaterials,
      correctAlternative: '',
      questionAlternatives: this.props.alternatives,
      correctRadioIndex: '',
      options: [
        { value: 'A', label: 'A', checked: question.rightAlternative === 'A' },
        { value: 'B', label: 'B', checked: question.rightAlternative === 'B' },
        { value: 'C', label: 'C', checked: question.rightAlternative === 'C' },
        { value: 'D', label: 'D', checked: question.rightAlternative === 'D' },
      ],
    }
  }

  getQuestion(id) {
    let matchQuestions
    this.props.questions.forEach(question => {
      if (question.id === id) {
        matchQuestions = question
      }
    })
    return matchQuestions
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

  verifyIfIsCordinator() {
    const { coordinator } = this.props.profile.data
    return !!coordinator
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
      rightAlternative: label,
    })
  }

  onPressEditQuestion = () => {
    const {
      statement,
      comment,
      complementaryMaterial,
      questionAlternatives,
      correctRadioIndex,
      rightAlternative,
      question,
    } = this.state

    const updatedQuestion = {
      id: question.id,
      rightAlternative: rightAlternative,
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

    const { isApproval } = this.props

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
            options={options}
          />
          <footer className="flex justify-between">
            {!isApproval && <Button>Salvar Questão</Button>}
            {this.verifyIfIsCordinator() &&
              isApproval && <Button>Aprovar Questão</Button>}
          </footer>
        </Form>
      </div>
    )
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

  approveQuestion = () => {
    const {
      statement,
      comment,
      complementaryMaterial,
      questionAlternatives,
      correctRadioIndex,
      question,
    } = this.state

    const approvedQuestions = {
      id: question.id,
      professor_id: question.professor_id,
      coordinator_id: question.coordinator_id,
      subarea_id: question.subarea_id,
      approved: true,
      statement: statement,
      correctAlternativeIndex: correctRadioIndex,
      comment: comment,
      studyMaterials: complementaryMaterial,
      questionAlternatives: questionAlternatives,
    }
    this.props.editQuestion(approvedQuestions)
  }
}
const mapStateToProps = (state, ownProps) => ({
  alternatives: getAlternatives(state, ownProps.match.params.id),
  profile: getData(state),
  questions: getQuestions(state),
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
