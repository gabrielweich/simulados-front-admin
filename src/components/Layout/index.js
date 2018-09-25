import React from 'react'

import Sidebar from '../Sidebar'
import Container from '../Container'
import Icon from '../Icon'
import { toggleSidebar, closeSidebar } from 'store/ui/actions'
import throttle from 'utils/throttle'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './layout.scss'

class Layout extends React.Component {
  closeSidebarIfNecessary = () => {
    if (window.innerWidth < 860) {
      this.props.closeSidebar()
    }
  }

  componentDidMount() {
    this.closeSidebarIfNecessary()
    
    window.addEventListener('resize',
      throttle(300, this.closeSidebarIfNecessary)
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  render() {
    const { children, toggleSidebar } = this.props

    return (
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

  }
}

export default
  connect(
    state => ({ router: state.router }),
    dispatch => bindActionCreators({ toggleSidebar, closeSidebar }, dispatch)
  )
(Layout)
