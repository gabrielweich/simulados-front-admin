import http from 'utils/http'

const saveQuestion = (question) => {

 return () => {
   console.log(question)
   return http.post('http://localhost:3000/questions', {data: question})
 }
}

export {saveQuestion}
