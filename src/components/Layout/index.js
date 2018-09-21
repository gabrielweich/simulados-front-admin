import React from 'react'

import Sidebar from '../Sidebar'
import Container from '../Container'

import './layout.scss'

const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    <Container className="layout__container">{children}</Container>
  </div>
)

export default Layout
