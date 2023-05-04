import React from 'react'
import Header from '../../common/components/Header/header'
import './loginPage.css'

import LoginForm from './LoginForm/loginForm'
const LoginPage = () => {
  return (
    <div>
      <Header/>
      <div  >
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
