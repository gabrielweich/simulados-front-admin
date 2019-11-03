import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const userLoaded = createAction('USER_LOADED')
const userLogout = createAction('USER_LOGOUT')

const login = (email, password) => dispatch => {
  return http
    .post('http://localhost:3000/signin', {
      data: {
        email: email,
        password: password,
      },
    })
    .then(user => dispatch(userLoaded(user)) /*&& dispatch(push('/nova')*/)
    .catch(error => {
      dispatch(
        growl(
          error.message === '400'
            ? 'Credenciais inválidas. Tente novamente'
            : 'Erro ao efetuar login. Tente novamente',
          GROWL_ERROR,
        ),
      )
    })
}

export { userLoaded, login, userLogout }
