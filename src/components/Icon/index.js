import React from 'react'
import cn from 'classnames'
import feather from 'feather-icons'

import './icon.scss'

const getIconContent = (name, options) => ({__html: feather.icons[name].toSvg(options)})

const Icon = ({ name, width = 18, height = 18, onClick }) => {
  const size = { width, height }
  return (
    <i
      className={cn('icon', onClick && 'clickable')}
      style={size}
      onClick={onClick}
      dangerouslySetInnerHTML={getIconContent(name, size)}
    />
  )
}

export default Icon
