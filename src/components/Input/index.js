import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import './input.scss'

const Input = ({
  as: T = 'input',
  onChange,
  value,
  placeholder,
  type,
  block,
  className,
  maxLength,
  required,
  ...rest
}) => (
  <T
    className={cn(
      'input',
      (block || T === 'textarea') && 'input--block',
      className,
    )}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type}
    maxLength={maxLength}
    required={required}
    {...rest}
  />
)

const InputWithIcon = props => (
  <div className="input-with-icon">
    <span className="input-with-icon__icon">
      <Icon name={props.type === 'search' ? 'search' : props.icon} />
    </span>
    <Input {...props} />
  </div>
)

const shouldHaveIcon = props => 'icon' in props || props.type === 'search'

export const TextArea = props => <Input as="textarea" {...props} />

export default props =>
  shouldHaveIcon(props) ? <InputWithIcon {...props} /> : <Input {...props} />
