import React from 'react'
import cn from 'classnames'

import './card.scss'

const Card = ({ children, as: T = 'div', className, onClick, onTouchEnd }) => (
  <T
    className={cn('card', className)}
    onTouchEnd={onTouchEnd}
    onClick={onClick}
  >
    {children}
  </T>
)

export default Card
