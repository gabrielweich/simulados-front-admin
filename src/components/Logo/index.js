import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.png'
import './logo.scss'

const Logo = () => (
  <Link className="logo" to="/">
    <img className="logo__image" src={logo} />
  </Link>
)

export default Logo
