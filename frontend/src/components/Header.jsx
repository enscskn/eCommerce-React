import React from 'react'
import { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Header() {

    const [theme, setTheme] = useState(true);

    const navigate = useNavigate();

    const changeTheme = () => {
        const root = document.getElementById("root");
        if(theme){
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
            root.style.overflow = "auto"; 
        }else{
            root.style.backgroundColor = "white";
            root.style.color = "#000";
            root.style.overflow = "auto"; 
        }
        setTheme(!theme);
    }

  return (
    <div className='header-container'>
        <div onClick={()=>navigate("/")} className='flex-row'>
            <img className='logo' src="./src/images/nexionlogo.png"/>
            <p className='logo-text'>Nexion</p>
        </div>
        <div className='flex-row search-container'>
            <input className='search-input' type="text" placeholder='Search'/>
            <div className='icons-container'>
                <CiShoppingBasket className='basket-icon'/>
                <div className='flex-row'>
                    {theme ? <FaMoon className='dark-icon' onClick={changeTheme}/> : <CiLight className='light-icon' onClick={changeTheme}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header