import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'
import { push } from 'connected-react-router'

const userLoaded = createAction('USER_LOADED')
const userLogout = createAction('USER_LOGOUT')

const login = (email, password) => dispatch => {
  return http
    .post('http://www.hml.ages.pucrs.br:4900/signin', {
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
