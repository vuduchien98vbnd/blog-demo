import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../../common/api/authService';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
          navigate('/')
        }
      },[])
    const handleButtonClicked = (e)=>{
        e.preventDefault();
        authService.login(username,password)
        .then(response =>{
          const data = response.data;
          
          localStorage.setItem('token', data.token)
          navigate('/')
        })
        .catch(error=>{
          alert('Nhập lại tài khoản hoặc mật khẩu')
        })
      }
  return (
    <div className='login'>
        <div className='loginTitle'>Đăng nhập</div>
        <form className='loginForm'onSubmit={handleButtonClicked}>
          <label htmlFor="text">Tên đăng nhập</label>
          <input type='text' placeholder='Nhập vào tên đăng nhập' className='loginInput' onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
          <label htmlFor="password">Mật khẩu</label>
          <input type='password' placeholder='Nhập vào mật khẩu' className='loginInput' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
          <div className='buttonSubmit'><button className='loginButton' type='submit'>Đăng nhập</button>  </div>
        </form>
        
        <div className='loginToRegister'>Bạn chưa có tài khoản? <Link to='/register' className='toRegister'>Đăng kí ngay!!!</Link></div>
    </div>
  )
}

export default LoginForm
