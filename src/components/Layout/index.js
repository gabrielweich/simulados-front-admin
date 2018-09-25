import React from 'react'

import Sidebar from '../Sidebar'
import Container from '../Container'
import Icon from '../Icon'
import { toggleSidebar } from 'store/ui/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './layout.scss'

const Layout = ({ children, toggleSidebar }) => (
  <div className="layout">
    <Sidebar />
    <div className="layout__container">
      <header className="layout__header">
        <Icon
          name="menu"
          width={24}
          height={24}
          onClick={toggleSidebar}
        />
      </header>
      <Container className="layout__content">
        {children}
      </Container>
    </div>
  </div>
)

export default
  connect(
    state => ({ router: state.router }),
    dispatch => bindActionCreators({ toggleSidebar }, dispatch)
  )
(Layout)
