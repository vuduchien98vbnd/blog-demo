import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../../common/api/authService'

const RegisterForm = () => {
    const navigate = useNavigate()
    const [authInput, setAuthInput] = useState({
        username: '',
        password: '',
        avatarUrl: '',
        fullName: ''
        
     });
     const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAuthInput({...authInput, [name]: value});
        
        
    };
    const handleCancelButton = () =>{
        navigate('/login')
    }

    const handleRegisterClicked = () =>{
        authService.register(authInput)
        .then(response =>{
          alert('Đăng ký thành công');
          navigate('/login')
          
        })
        .catch(error =>{
          alert('Đăng kí không thành công')
        })
      }
  return (
    <div className='register'>
          <div className='registerTitle'>Đăng ký tài khoản</div>
          <form className='registerForm'>
            <label htmlFor="text">Tên đăng nhập</label>
            <input  type='text' 
                    placeholder='Nhập vào tên đăng nhập' 
                    className='registerInput'
                    name='username' 
                    value={authInput.username} 
                    onChange={handleInputChange} />
            <label htmlFor="password">Mật khẩu</label>
            <input  type='password' 
                    placeholder='Nhập vào mật khẩu' 
                    className='registerInput' 
                    name='password'
                    value={authInput.password} 
                    onChange={handleInputChange} />
            <label htmlFor="text">Avatar</label>
            <input type='text' 
                    placeholder='Nhập vào link hình ảnh' 
                    className='registerInput' 
                    name='avatarUrl'
                    value={authInput.avatarUrl} 
                    onChange={handleInputChange} />
            <label htmlFor="text">Tên người dùng</label>
            <input type='text' 
                    placeholder='Nhập vào tên người dùng' 
                    className='registerInput' 
                    name='fullName'
                    value={authInput.fullName} 
                    onChange={handleInputChange} />
            
          </form>
          
          <button className='registerButton'onClick={handleRegisterClicked}>Đăng ký</button>
          <button className='cancelButton' onClick={handleCancelButton}>Hủy</button>
        </div>
  )
}

export default RegisterForm
