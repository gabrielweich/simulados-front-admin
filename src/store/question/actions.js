import http from 'utils/http'
import { createAction } from 'redux-actions'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR, GROWL_SUCCESS } from 'store/ui/constants'

const questionsLoaded = createAction('QUESTIONS_LOADED')

const saveQuestion = question => {
  return () => {
    return http.post('http://localhost:3000/questions', { data: question })
  }
}

const editQuestion = question => dispatch => {
  http
    .put(`http://localhost:3000/questions/${question.id}`, {
      data: question,
    })
    .then(() => dispatch(growl('Questão alterada com sucesso.', GROWL_SUCCESS)))
    .catch(error =>
      dispatch(
        growl(
          error.message === '400'
            ? 'Campos informados invalidos'
            : 'Erro ao atualizar questão',
          GROWL_ERROR,
        ),
      ),
    )
}

const fetchQuestions = (professorId, subArea, offset, limit) => dispatch => {
  http
    .get(`http://localhost:3000/professor/questions/${professorId}`)
    .then(listQuestions => dispatch(questionsLoaded(listQuestions)))
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}

export { saveQuestion, questionsLoaded, fetchQuestions, editQuestion }
