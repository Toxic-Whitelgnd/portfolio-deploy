import React,{nav,menu} from 'react';
import * as Faicon from "react-icons/fa";
import { Link } from "react-router-dom";
import {useState} from "react"
import * as Aiicon from "react-icons/ai";
import { SidebarData } from './SidebarData';
import "./Navbar.css";
import {IconContext} from "react-icons"


function Navbar() {
    const [sidebar,setsidebar] = useState(true);

    const showsidebar = () => setsidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color:'red'}}>
    <div className="navbar">
        <Link to="#" className="menu-bar">
            <Faicon.FaBars onClick={showsidebar}/>
        </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showsidebar} >
            <li className='navbar-toggle'>
                <Link to="#" className="menu-bar-cross" >
                    <Aiicon.AiOutlineClose />
                </Link>
            </li>
            <li>
                <div className="tag1-hw">
                    <h6>#hello_world!!</h6>
                </div>
                <div className="tag2-hg">
                    <h6>#hello guys! :]</h6>
                </div>
                {/* <div className='avatar-profile'>
                    <img  alt="developer-profile" src="https://static.toiimg.com/photo/75503656.cms"></img>
                </div> */}
            </li>
            {SidebarData.map((item,index)=>{
                return(
                    <li key={index} className={item.cName}>
                        
                        <Link to={item.path} spy={true} smooth={true}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        
                    </li>
                );
            }) }
        </ul>
    </nav>
    </IconContext.Provider>        
    </>
  )
}

export default Navbar
