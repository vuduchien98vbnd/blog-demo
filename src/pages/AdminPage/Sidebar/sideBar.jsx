
import "./sideBar.css"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { faBars, faList,  faChartColumn, faRightFromBracket, faUserLarge} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useResize from "../../../hooks/useResize";
import { Grid } from "@mui/material";



const SideBarBlog = ({isOpen, onClickToggle}) =>{
    const size = useResize()
    // const[isOpen ,setIsOpen] = useState(true);
    // const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/admin",
        //     name:"Thông tin",
        //     icon:<FontAwesomeIcon icon={faUserLarge} />
        // },
        {
            path:"table",
            name:"Danh sách bài viết",
            icon:<FontAwesomeIcon icon={faList} />
        },
        {
            path:"statistic",
            name:"Thống kê",
            icon: <FontAwesomeIcon icon={faChartColumn} />
        }
    
    ]
    const handleOnClicked = () =>{
        onClickToggle()
    }
    const handleLogout = () =>{
        localStorage.removeItem("token");
      }
   
    return(
        <>
        {size.width > 992 &&
            <div className="container-sidebar">
            <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <div style={{marginLeft: "0px",
                               marginRight: isOpen ? "10px":"0px"}} 
                className="bars">
                        <FontAwesomeIcon icon={faBars} onClick={handleOnClicked} /> 
                    </div>
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo-sidebar">
                        
                        
                    </h1>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link-sidebar" >
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
    
                         <Link to="/" className='out' onClick={handleLogout}>
                            <div className="icon"><FontAwesomeIcon icon={faRightFromBracket} /></div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">Log-out</div>
                         </Link>
            </div>
            
         </div>}
        {size.width <= 992 && size.width >= 600 &&
            <div className="container-sidebar">
            <div style={{width: !isOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <div style={{marginLeft: "0px",
                               marginRight: !isOpen ? "10px":"0px"}} 
                className="bars">
                        <FontAwesomeIcon icon={faBars} onClick={handleOnClicked} /> 
                    </div>
                    <h1 style={{display: !isOpen ? "block" : "none"}} className="logo-sidebar">
                        
                        
                    </h1>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link-sidebar" active="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: !isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
    
                         <Link to='/' className='out' onClick={handleOnClicked}>
                            <div className="icon"><FontAwesomeIcon icon={faRightFromBracket} /></div>
                            <div style={{display: !isOpen ? "block" : "none"}} className="link_text">Log-out</div>
                         </Link>
            </div>
            
         </div>
        }
        {size.width <600 && 
        <div>
           
            <Grid container spacing={1} className="sidebar-footer">
               {menuItem.map((item,index)=>
                    <Grid item xs={6} key={index} className="sidebar-tab" >
                        <Link to={item.path} className="sidebar-tab-link"  >{item.name}</Link>
                    </Grid> 
                   
                )} 
            </Grid>
            
        </div>}
        
     </>
        
    )
}

export default SideBarBlog