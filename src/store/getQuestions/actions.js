import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const questionsLoaded = createAction('QUESTIONS_LOADED')

const fetchQuestion = (professorId, subArea, offset, limit) => dispatch => {
  http
    .get(
      'http://localhost:3000/professor/questions/:professor/:subarea?/:offset?/:limit?',
    )
    .then(questions => dispatch(questionsLoaded(questions.questions)))
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}
export { questionsLoaded, fetchQuestion }
