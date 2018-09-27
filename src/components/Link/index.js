import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import './link.scss'

export default ({
  to,
  href,
  children,
  className
}) => {
  const T = to ? Link : 'a'

  return (
    <T className={cn('link', className)} to={to} href={href}>
      {children}
    </T>
  )
}
