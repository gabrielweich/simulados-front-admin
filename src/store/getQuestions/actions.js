import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const confirmAnswer = createAction('CONFIRM_ANSWER')
const questionsLoaded = createAction('QUESTIONS_LOADED')

const fetchQuestion = (examId, subArea) => dispatch => {
  http
    .get('http://localhost:3000/questions?examId=' + examId)
    .then(questions => dispatch(questionsLoaded(questions.questions)))
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}
export { confirmAnswer, questionsLoaded, fetchQuestion }
