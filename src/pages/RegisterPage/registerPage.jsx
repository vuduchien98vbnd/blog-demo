import React from 'react'
import Header from '../../common/components/Header/header'
import './registerPage.css'
import RegisterForm from './RegisterForm/registerForm'

const RegisterPage = () => {
   
  return (
    <div>
      <Header/>
      <div  >
        <RegisterForm/>
      </div>
    </div>
  )
}

export default RegisterPage
