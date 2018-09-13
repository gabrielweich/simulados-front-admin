import http from 'utils/http'

const saveQuestion = (question) => {

  return () => {
    return http.post('localhost:3000/question', question)
  }
}

export {saveQuestion}
