import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import './header.css'
import logoBlog from '../../../image/logoBlog.jpg'
import useResize from '../../../hooks/useResize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG, faHeart, faHouse, faListCheck, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@mui/icons-material/GitHub';
const pages = [
  {
    name:"TRANG CHỦ",
    path: "/",
    icon: <FontAwesomeIcon icon={faHouse} />
  },
  {
    name:"YÊU THÍCH",
    path: "/favorite",
    icon: <FontAwesomeIcon icon={faHeart} />
  },
  {
    name:"GITHUB",
    icon: <GitHubIcon />
    
  },

];


function Header() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isLogin = localStorage.getItem('token')
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () =>{
    localStorage.removeItem("token");
  }
  const handleLogin = () =>{
    navigate('/login')
  }
  const handleHomePage = () =>{
    navigate('/')
  }
  const size = useResize()
  
  return (
    <div className='headerBlog-container'>
    <div  className='header-blog'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {size.width>= 900 && <img src={logoBlog} className='logo-blog'  />}
          <Typography
            variant="h6"
            noWrap
            component="a"
           
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontSize: 30,
              
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
            onClick={handleHomePage}
          >
            MY BLOG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((item,index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to={item.path} className='link_page_m'>{item.icon} {item.name}</NavLink></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {size.width< 900 && <img src={logoBlog} className='logo-blog'  />}
          <Typography
            variant="h5"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily:'Arial, Helvetica, sans-serif'
            }}
            onClick={handleHomePage}
          >
            MY BLOG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(( item,index) => (
              <div className='blogItem-name'
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                <NavLink to={item.path} className='link_page'>{item.icon} {item.name}</NavLink>
              </div>
            ))}
          </Box>

          {isLogin &&
          <>
            <Box sx={{ flexGrow: 0,display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113__340.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              
            >
              
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><NavLink to='/admin/table' className='link_page_m'> <FontAwesomeIcon icon={faListCheck} /> QUẢN LÝ</NavLink></Typography>
                  
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link to='/' className='link_page_m' onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} /> ĐĂNG XUẤT</Link></Typography>
                  
                </MenuItem>
             
            </Menu>
            
            
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          
                <Button 
                 onClick={handleCloseUserMenu}
                 sx={{ my: 2, color: 'white', display: 'block' }}
                 ><NavLink to='/admin/table' className='link_page'><FontAwesomeIcon icon={faListCheck} /> QUẢN LÝ</NavLink>
                 
                </Button>
                <Button 
                 onClick={handleCloseUserMenu}
                 sx={{ my: 2, color: 'white', display: 'block' }}
                 ><Link to='/' className='link_page' onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} /> ĐĂNG XUẤT</Link>
                 
                </Button>
              
              
              <IconButton >
                <Avatar alt="" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113__340.png" />
              </IconButton>
            
          </Box>
          </>
          }
          {!isLogin && 
            <Box sx={{ flexGrow: 0, display: { xs: 'inline', md: 'flex' } }}>
              <Button onClick={handleLogin}
              sx={{ my: 2, color: 'black', 
                  display: 'block',
                  fontFamily:'Arial, Helvetica, sans-serif',
                  fontSize:'16px'
                  }}><FontAwesomeIcon icon={faRightToBracket} /> Đăng nhập</Button>
            </Box>
          }
        </Toolbar>
      </Container>
    </div>
    </div>
  );
}
export default Header;
