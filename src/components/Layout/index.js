import React from 'react'

import Sidebar from '../Sidebar'
import Container from '../Container'
import Icon from '../Icon'

import './layout.scss'

const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    <div className="layout__container">
      <header className="layout__header">
        <Icon name="menu" width="24" height="24" />
      </header>
      <Container className="layout__content">
        {children}
      </Container>
    </div>
  </div>
)

export default Layout
