import React from 'react'

const makeSubmitionHandler = props => event => {
  event.preventDefault() // prevent browser request
  props.onSubmit(event)
}

const Form = props => (
  <form
    className={'form ' + props.className}
    onSubmit={makeSubmitionHandler(props)}
  >
    {props.children}
  </form>
)

export default Form
