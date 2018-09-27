import React from 'react'
import cn from 'classnames'

import Input from '../Input'

import './field.scss'

const Field = ({
  id,
  info,
  label,
  className,
  as: T = Input,
  ...rest
}) => (
  <div className={cn('field', className)}>
    <label className="field__label" htmlFor={id}>{label}</label>
    <T id={id} block {...rest} />
    {info && <small className="field__info">{info}</small>}
  </div>
)

export default Field
