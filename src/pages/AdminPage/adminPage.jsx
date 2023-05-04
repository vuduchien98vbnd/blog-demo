import React, { useEffect, useState } from 'react'
import Header from '../../common/components/Header/header'
import SideBarBlog from './Sidebar/sideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import './Sidebar/sideBar.css'
import useResize from '../../hooks/useResize'

const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
      const token = localStorage.getItem('token')
      if(!token){
          navigate('/login')
      }
  },[])
  const size = useResize()
  const[isOpen ,setIsOpen] = useState(true);
  const toggle = () => setIsOpen (!isOpen);
  return (
    
    <div>
        <Header/>
        { size.width > 992 &&
          <div style={{ marginLeft: isOpen ? '300px' : '50px'}}>
            <SideBarBlog
              isOpen={isOpen}
              onClickToggle={toggle}
            />
            <Outlet/>
          </div>
        }
        { size.width <= 992 && size.width > 600 &&
          <div style={{ marginLeft: !isOpen ? '300px' : '50px'}}>
            <SideBarBlog
              isOpen={isOpen}
              onClickToggle={toggle}
            />
            <Outlet/>
          </div>
        }
        { size.width <=600 &&
          <div >
            <SideBarBlog
            />
            <Outlet/>
          </div>
        }   
    </div>
  )
}

export default AdminPage
