import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from "./Logo"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from "../features/user/userSlice"

const Navbar = () => {
  const { user } = useSelector((store)=>store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>

    <div className="nav-center">
      <button className="toggle-btn" type='button' onClick={toggle}>
        <FaAlignLeft />
      </button>
      <div>
        <Logo />
        <h3 className="logo-text">dashboard</h3>
      </div>
      <div className="btn-container">
        <button className="btn" type='button' onClick={()=>console.log('toggle logout dropdown')}>
          <FaUserCircle/>
          {user?.name}
          <FaCaretDown/>
        </button>
        <div className="dropdown show-dropdown">
          <button className="dropdown-btn"type='button' onClick={()=>console.log('logout user')}>
            logout
          </button>
        </div>
      </div>
    </div>     
    </Wrapper>
  )
}
export default Navbar