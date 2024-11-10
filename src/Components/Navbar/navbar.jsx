import "./navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import caret_cion from "../../assets/caret_icon.svg";
import profile from "../../assets/profile_img.png";
import { useEffect, useRef } from "react";
import { logOut } from "../../firebase";

const Navbar = () => {
  const navRef=useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>80){
        navRef.current.classList.add('dark-navbar');
      }else{
        navRef.current.classList.remove('dark-navbar');
      }
    })
  })
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="" className="icons" />
        <p>Chicken</p>
        <img src={bellIcon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile} alt="" className="profile" />
          <img src={caret_cion} alt=""  />
          <div className="dropdown">
              <p onClick={()=>logOut()}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
