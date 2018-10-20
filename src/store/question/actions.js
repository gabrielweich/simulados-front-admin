import http from 'utils/http'
import { createAction } from 'redux-actions'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const questionsLoaded = createAction('QUESTIONS_LOADED')

const saveQuestion = question => {
  return () => {
    console.log(question)
    return http.post('http://localhost:3000/questions', { data: question })
  }
}

const editQuestion = question => {
  return () => {
    console.log(question)
    return http
      .put(`http://localhost:3000/professor/questions/${question.id}`, {
        data: question,
      })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
}

const fetchQuestions = (professorId, subArea, offset, limit) => dispatch => {
  http
    .get(`http://localhost:3000/professor/questions/${professorId}`)
    .then(questions => dispatch(questionsLoaded(questions)))
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}

export { saveQuestion, questionsLoaded, fetchQuestions, editQuestion }
