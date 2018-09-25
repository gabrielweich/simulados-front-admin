import React from 'react'
import feather from 'feather-icons'

import './icon.scss'

const getIconContent = (name, options) => ({__html: feather.icons[name].toSvg(options)})

const Icon = ({ name, width = 16, height = 16, onClick }) => (
  <i
    className="icon"
    onClick={onClick}
    dangerouslySetInnerHTML={getIconContent(name, { width, height })}
  />
)

export default Icon
